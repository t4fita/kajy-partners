<script>
    import "../app.css";

    import Header from "../components/Header.svelte";

    import { openModal } from "../store";

    let y;
    $: outerHeight = 0;

    function reroute(href) {
        $openModal = false;
        window.location.href = href;
    }

</script>


{#if y > outerHeight}
    <div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
        <Header/>
    </div>
{/if}

<slot />