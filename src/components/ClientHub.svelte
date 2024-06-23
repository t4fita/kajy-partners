<script>
    export let clients = [];
</script>

<style>
    .clients-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 2rem;
        justify-items: center;
        align-items: center;
    }
    .client-logo {
        max-width: 100px;
        opacity: 0.8;
        transition: all 0.3s;
        filter:grayscale(1);
    }
    .client-logo:hover {
        filter:grayscale(0);
        opacity: 1;
    }
</style>

<div class="client-hub flex flex-wrap justify-between ">
    <div class="lg:w-1/3 md:w-1/3 p-4 w-auto inline-block center m-auto">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">They trust us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere labore incidunt quibusdam velit, voluptate modi ullam tenetur molestias aut libero minima voluptatum quia ab repellendus hic pariatur eos deserunt.</p>
    </div>
    <div class="clients-grid lg:w-1/2 md:w-1/2 p-4 w-full">
        {#each clients as client}
            <img src={client.logo} alt={client.name} class="client-logo" />
        {/each}
    </div>
</div>
