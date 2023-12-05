<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Login from "./components/Login/Login.svelte";
	import PrivateRoute from "./components/PrivateRoute/PrivateRoute.svelte";
	import Form from "./components/Form/Form.svelte";
	import { user, store } from "./stores";
    import List from "./components/List/List.svelte";
	import { onMount } from "svelte";


	function handleLogout() {
	  $user = null;
	}

	let savestore = false;
  	$: if (savestore && $store) {
    	window.sessionStorage.setItem("store", JSON.stringify($store))
  	}
  	onMount(async () => {
    	let ses = window.sessionStorage.getItem("store")
     	if (ses) {
        	console.log("sob-- ~ loading ses", ses)
        	$store = JSON.parse(ses);
     	}
    	savestore = true
  	})
  </script>


  
  <Router>
	<main>
	  <Route path="/">
		<Login />
	  </Route>
  
	  <Route path="list">
		<List />
	  </Route>
  
	  <Route path="/list/form">
		<Form choice={true}/>
	  </Route>
  
	  <PrivateRoute path="profile" let:location>
		<h3>Welcome {$user.username}</h3>
		<button on:click={handleLogout}>Logout</button>
	  </PrivateRoute>
	</main>
  </Router>
  

 