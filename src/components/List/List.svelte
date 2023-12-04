<script>
   import { store } from '../../stores';

    let people = [
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	];

  let prefix = '';
	let first = '';
	let last = '';
	let i = 0;

    $: filteredPeople = prefix
		? people.filter((person) => {
				const name = `${person.last}, ${person.first}`;
				return name.toLowerCase().startsWith(prefix.toLowerCase());
		  })
		: people;



function create() {
    people = people.concat({ first, last });
    i = people.length - 1;
    first = last = '';
}

function update(index) {
    filteredPeople[index].first = first;
    filteredPeople[index].last = last;
    people = people;
}

function remove(index) {
    const atual = [...$store.stores.slice(0, index), ...$store.stores.slice(index + 1)];
    $store.stores = atual;
    
}

function reset_inputs(person) {
    first = person ? person.first : '';
    last = person ? person.last : '';
}
</script>

<div class="container">
    <!-- <input placeholder="filter prefix" bind:value={prefix} />
    <label><input bind:value={first} placeholder="first" /></label>
<label><input bind:value={last} placeholder="last" /></label>

<div class="buttons">
	<button on:click={create} disabled={!first || !last}>create</button>
	<button on:click={update} disabled={!first || !last || !selected}>update</button>
	<button on:click={remove} disabled={!selected}>delete</button>
</div> -->
<div class="list">
    <ul>
        <!-- <li>{$store.data}</li> -->
        {#each $store.stores as data, i}
            <li>
              <div class="solicitante">
                <div>
                  <p id="nome">{data.solicitante}</p>
                  <p style="font-size: 12px; margin-left:7px; color: grey;">{data.data}</p>
                </div>
                <div style="display: flex;">
                  <p style="margin-top:4px;">{data.encaminhamento}</p>
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <i on:click={() => remove(i)} style="margin-left:15px; margin-right:-10px; margin-top: -10px" class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div >
                <p style="word-wrap: break-word;">{data.descricao}</p>
                {#if data.link}
                <div style="display: flex; align-items: center; gap: 10px;">
                  <i class="fa-solid fa-link"></i>
                  <a href={data.link}>{data.link}</a>
                </div>
                {/if}
                {#if data.arquivo}
                    <img class="avatar" src="{data.arquivo}" alt="d" />
                {/if}
              </div>
            </li>
            <!-- <button on:click={() => update(i)} disabled={!first || !last || !selected}><i  class="fa-regular fa-pen-to-square"></i></button> -->
        {/each}
    </ul>
  </div>
</div>


<style>

:root {
  --container-height: 498px;
}

.container{
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 50%;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(#999, .25);
    padding: .75rem;
}

.list {
  max-height: var(--container-height);
  border-radius: 5px; 
  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-timeline: --listTimeline block;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #f0eeee;
}

li {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
  border-top: 1px solid #ccc;
  scroll-snap-align: start;
  white-space: pre-wrap;
}

.solicitante {
  display: flex;
  justify-content: space-between;
}

#nome {
  font-size: 20px;
  text-transform: capitalize;
}

li:first-child {
  border: 0;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6658d3;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #19647e;
}
.avatar{
		display:flex;
		height:80%;
		width:80%;
	}

</style>