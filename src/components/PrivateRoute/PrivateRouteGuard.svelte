<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../stores";
  
    const navigate = useNavigate();
    const location = useLocation();

    let data = {
      "username": "mournkid",
      "password": "mille"
    }

    $: console.log($location.pathname);

  
    $: if (!$user) {
      navigate("/login", {
        state: { from: $location.pathname },
        replace: true,
      });
    }
  </script>
  
  {#if $user}
    <slot />
  {/if}
  