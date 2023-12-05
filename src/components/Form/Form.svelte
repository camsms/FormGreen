<script>
	
  import items from '../../json/select.json';
  import { store } from '../../stores';
  import { useNavigate, Link } from "svelte-navigator";

	const navigate = useNavigate();

	let fileinput, file;
  export let avatar;
  let i = 0;

  export let choice = true;
  export let n;

  export let date = '';
  export let solicitante = '';
  export let descricao = '';
  export let name = '';
  export let url = '';

	const onFileSelected = (e) =>{
		let image = e.target.files[0];
		file = image;
    name = file.name;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
			avatar = e.target.result
			// console.log(avatar);
        };
	}

  function create() {
    $store.stores.push($store);
    console.log($store.stores);
    // i = people.length - 1;
    // first = last = '';
}
</script>


<header>
  <div class="topnav">
    <h1>Formulários</h1>
    <div>
      <Link to="/list"><a href="#w">Home</a></Link>
      <Link to="form"><a href="#w">Formulário</a></Link>
      </div>
  </div>
</header>

<div class="container">
	<form action="#">
		<div class="input">
			<input type="text" bind:value={solicitante} class="input-field"  required/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="input-label">Solicitante</label>
		</div>
		<div class="input">
			<input type="date" bind:value={date} class="input-field" style="padding-top: 15px;" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="input-label" style="top: 23px;" >Data</label>
		</div>
    <div class="input">
			<input type="url" bind:value={url} class="input-field" style="padding-top: 15px;" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="input-label" style="top: 23px;" >Link</label>
		</div>
		<div class="input">
			<select bind:value={i} class="input-field">
        {#each items as {option}, i}
        <option value={i}>{option}</option>
        {/each}
			  </select>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="input-label" style="top: 23px;" >Encaminhamento</label>
		</div>
		
	   <div class="form-row">
	   <div class="input-data textarea">
		  <textarea bind:value={descricao} rows="8" cols="80"></textarea>
		  <br />
		  <div class="underline"></div>
		  <label for="">Descrição</label>
		  <br />
			<div class="input">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="input-label" style="top: 0px;" >Anexe um arquivo</label>
				{#if avatar}
				<div class="imagem" style="">
					<p style="color:#6658d3; font-weight:700">{name}</p>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
				</div>
				{:else}
				<div class="imagem">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img class="upload" style="margin-left:347px" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
				</div>
				{/if}
			</div>
				
				<input style="display:none" type="file"  on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	    {#if choice}
		  <div class="action">
			<button on:click={() => {
        $store.data = date;
        $store.arquivo = avatar;
        $store.solicitante = solicitante;
        $store.encaminhamento = items[i].option;
        $store.descricao = descricao;
        $store.stores.push({
          "data": date,
          "arquivo": avatar,
          "solicitante": solicitante,
          "encaminhamento": items[i].option,
          "descricao": descricao,
          "link": url,
          "nameFile": name 
        });
        navigate('/list')
      }} class="action-button">Enviar</button>
		</div>
    {:else}
    <div class="action">
			<button on:click={() => {
        $store.data = date;
        $store.arquivo = avatar;
        $store.solicitante = solicitante;
        $store.encaminhamento = items[i].option;
        $store.descricao = descricao;
        $store.stores[n] = {
          "data": date,
          "arquivo": avatar,
          "solicitante": solicitante,
          "encaminhamento": items[i].option,
          "descricao": descricao,
          "link": url,
          "nameFile": name
        };
        navigate('/list')
      }} class="action-button">Enviar</button>
		</div>
    {/if}
	</form>
	</div>


<style>
  .topnav {
  		display: flex;
		align-items: center;
		height: 80px;
		justify-content: space-between;
		padding: 40px;
	}

	h1 {
		color: rgb(33, 33, 139);
	}

	.topnav a {
 		float: left;
  		color: rgb(33, 33, 139);
  		text-align: center;
  		padding: 14px 16px;
  		text-decoration: none;
  		font-size: 17px;
	}


	.topnav a:hover {
  		background-color: #ddd;
  		color: black;
		border-radius: 10px;
	}

	.imagem {
		border: 2px solid #eee;
		height: 40px; 
		width:100%; 
		border-radius:10px; 
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}

	.upload{
		display:flex;
		height:30px;
		width:30px;
		cursor:pointer;
	}

	.container{
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 425px;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(#999, .25);
    padding: .75rem;
}

.container form{
  padding: 30px 0 0 0;
}
.container form .form-row{
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data{
  width: 100%;
  position: relative;
}

form .form-row .textarea{
  height: 70px;
}

.textarea textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}
 .textarea textarea:focus ~ label,
 .textarea textarea:valid ~ label{
  transform: translateY(-20px);
 
  color: #6658d3;
}
.textarea textarea{
  resize: none;
  padding-top: 10px;
}
.input-data label{
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label{
  width: 100%;
  bottom: 40px;
  color: #8597a3;
  position: absolute;
  transition: .25s ease;
  background: #fff;
}
.input-data .underline{
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #6658d3;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
  transform: scale(1);
}

@media (max-width: 700px) {
  .container form{
    padding: 10px 0 0 0;
  }
  .container form .form-row{
    display: block;
  }
  form .form-row .input-data{
    margin: 35px 0!important;
  }
}

*, *:after, *:before {
    box-sizing: border-box;
	outline: none;
  }
  
  input {
    appearance: none;
    border-radius: 0;
  }
  
  
  .input {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    padding-top: 1.5rem;
    &+.input {
      margin-top: 1.5rem;
    }
  }
  
  .input-label {
    color: #8597a3;
    position: absolute;
    top: 1.5rem;
    transition: .25s ease;
  }
  
  .input-field {
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid #eee; 
    font: inherit;
    font-size: 1.125rem;
    padding: .25rem 0;
    &:focus, &:valid {
      outline: 0;
      border-bottom-color: #6658d3;
      &+.input-label {
        color: #6658d3;
        transform: translateY(-1.5rem);
      }
    }
  }
  
  .action {
    margin-top: 2rem;
  }
  
  .action-button {
    font: inherit;
    font-size: 1.25rem;
    padding: 1em;
    width: 100%;
    font-weight: 500;
    background-color: rgb(33, 33, 139);
    border-radius: 6px;
    color: #FFF;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
</style>