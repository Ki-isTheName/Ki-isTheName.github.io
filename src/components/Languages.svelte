<script>
    import { languageStore } from '../stores.js';
    // import { createEventDispatcher } from 'svelte';
    // const dispatch = createEventDispatcher();
    export let languages = [
      {name: 'English', code: 'en-US'},
      {name: 'Malay', code: 'ms-MY'}
    ];
    export let selected = '';
    function handleChange(event) {
      selected = event.target.value;
      languageStore.set(selected);
      console.log("Language picked",selected);
    }
</script>
  
<select on:change={handleChange}>
    {#each languages as language (language.code)}
        <option value={language.code}>{language.name}</option>
    {/each}
</select>

<p>Selected language: {selected}</p>

  