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

$: selected = filteredPeople[i];

$: reset_inputs(selected);

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

function remove() {
    // Remove selected person from the source array (people), not the filtered array
    const index = people.indexOf(selected);
    people = [...people.slice(0, index), ...people.slice(index + 1)];

    first = last = '';
    i = Math.min(i, filteredPeople.length - 2);
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
        {#each $store.stores as data}
            <li>
                <p>{data.solicitante}</p>
                <p>{data.descricao}</p>
                <p>{data.data}</p>
                <p>{data.encaminhamento}</p>
                {#if data.arquivo}
                    <img class="avatar" src="{data.arquivo}" alt="d" />
                {/if}
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
    max-width: 425px;
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
  background: #e9e8e8;
}

li {
  padding: 20px;
  border-top: 1px solid #ccc;
  scroll-snap-align: start;
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
		height:200px;
		width:200px;
	}

</style>