<script>
    import { useNavigate, useLocation, Link } from "svelte-navigator";
    import { user } from "../../stores";
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";

	  let eemail;
	  let senha;
    const form = useForm();
  
    const navigate = useNavigate();
    const location = useLocation();
  
    let username;
    let password;
  
    // function handleSubmit() {
    //   $user = { username, password };
    //   const from = ($location.state && $location.state.from) || "/";
    //   navigate(from, { replace: true });
    // }
  </script>
  
  <header>
    <div class="topnav">
      <h1>Formulários</h1>
    </div>
  </header>
  
  <form use:form>
    <div class="container">
      <div class="card">
        <form class="card-form">
          <div class="input">
            <input bind:value={eemail} type="email" name="email" class="input-field"  use:validators={[required, email]}/>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="input-label">Usuário</label>
          </div>
            <div class="input">
            <input bind:value={senha} type="password" class="input-field" name="password" use:validators={[required]}/>
            <label class="input-label">Senha</label>
          </div>
          <div class="action">
            <button class="action-button" on:click={() =>
              {
                if(eemail === "mille_sousa@outlook.com" && senha==="mournkid"){
                  navigate('/list');
                }
              }} disabled={!$form.valid}>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </form>

      <!-- <input type="email" bind:value={eemail} name="email" use:validators={[required, email]} />
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup> -->

  <!-- <input type="password" bind:value={senha} name="password" use:validators={[required]} />
  <Hint for="password" on="required">This is a mandatory field</Hint> -->

  <!-- <button on:click={() =>
  {
    if(eemail === "mille_sousa@outlook.com" && senha==="mournkid"){
      navigate('/list');
    }
  }} disabled={!$form.valid}>Login</button>
</form> -->
<!-- {#if eemail==="mille_sousa@outlook.com"  &&  senha==="mournkid" }
<p>logado</p>
{/if} -->



<!--   
  <div class="container">
    <div class="card">
      <form class="card-form">
        <div class="input">
          <input bind:value={username} type="text" class="input-field"  required/>
          <label class="input-label">Usuário</label>
        </div>
          <div class="input">
          <input bind:value={password} type="password" class="input-field" required/>
          <label class="input-label">Senha</label>
        </div>
        <div class="action">
          <button class="action-button" on:click={() => handleSubmit()}>Entrar</button>
        </div>
      </form>
    </div>
  </div>
   -->

  <style>
    *, *:after, *:before {
    box-sizing: border-box;
  }
  
  input {
    appearance: none;
    border-radius: 0;
  }
  
  .card {
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
  
  
  .card-form {
    padding: 2rem 1rem 0;
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
    background-color: #6658d3;
    border-radius: 6px;
    color: #FFF;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
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


	.topnav a.active {
  		background-color: #04AA6D;
  		color: white;
	}
  </style>


  <!-- <h3>Login</h3>
  <form on:submit={handleSubmit}>
    <input
      bind:value={username}
      type="text"
      name="username"
      placeholder="Username"
    />
    <br />
    <input
      bind:value={password}
      type="password"
      name="password"
      placeholder="Password"
    />
    <br />
    <button type="submit">Login</button>
  </form>
   -->