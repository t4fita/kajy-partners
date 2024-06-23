<script>
    export let dark;
</script>

<div class="flex items-center gap-4">
    <a href="/contact">
        <button class={"specialBtn " + (dark ? " bg-[#181b34]" : " ")}>
            <p class="text-base sm:text-lg md:text-xl">Contact Us</p>
        </button>
    </a>
    <a href="/services">
        <button class="specialBtnDark">
            <p class="text-base sm:text-lg md:text-xl">Discover More &rarr;</p>
        </button>
    </a>
</div>