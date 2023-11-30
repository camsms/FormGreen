<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Login from "./components/Login/Login.svelte";
	import PrivateRoute from "./components/PrivateRoute/PrivateRoute.svelte";
	import Form from "./components/Form/Form.svelte";
	import { user } from "./stores";
  
	function handleLogout() {
	  $user = null;
	}
  </script>

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


	.topnav a.active {
  		background-color: #04AA6D;
  		color: white;
	}
  </style>
  
  <Router>
	<header>
		<div class="topnav">
			<h1>Formulários</h1>
			<div>
				<Link to="/"><a href="#w">Home</a></Link>
			    <Link to="form"><a href="#w">Formulário</a></Link>
			    <Link to="profile"><a href="#w">Profile</a></Link>
			</div>
		</div>
	</header>
  
	<main>
	  <Route path="login">
		<Login />
	  </Route>
  
	  <Route path="/">
		<h3>Home</h3>
		<p>Home sweet home...</p>
	  </Route>
  
	  <Route path="form">
		<Form />
	  </Route>
  
	  <PrivateRoute path="profile" let:location>
		<h3>Welcome {$user.username}</h3>
		<button on:click={handleLogout}>Logout</button>
	  </PrivateRoute>
	</main>
  </Router>
  