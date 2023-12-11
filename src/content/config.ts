import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishDate: z.string().refine(
			value => !isNaN(Date.parse(value)), 
			{		
				message: 'Invalid date format',
			}),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		img_alt: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	'work': work,
	'blog': blog,
};