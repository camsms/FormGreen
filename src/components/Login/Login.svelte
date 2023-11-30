<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../stores";
  
    const navigate = useNavigate();
    const location = useLocation();
  
    let username;
    let password;
  
    function handleSubmit() {
      $user = { username, password };
      const from = ($location.state && $location.state.from) || "/";
      navigate(from, { replace: true });
    }
  </script>
  
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
  
  </style>
  
  
  <div class="container">
    <!-- code here -->
    <div class="card">
      <form class="card-form">
        <div class="input">
          <input type="text" class="input-field"  required/>
          <label class="input-label">Usuário</label>
        </div>
          <div class="input">
          <input type="password" class="input-field" required/>
          <label class="input-label">Senha</label>
        </div>
        <div class="action">
          <button class="action-button">Entrar</button>
        </div>
      </form>
    </div>
  </div>
  



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