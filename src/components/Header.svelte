<script>
    import { openModal } from "../store";
    import Logo from "./Logo.svelte";
    import { slide } from 'svelte/transition';
    import { page } from '$app/stores';

    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }

    $: currentPath = $page.url.pathname;
</script>

<header class="sticky top-0 left-0 right-0 z-50 backdrop-blur-md md:bg-white md:bg-opacity-80">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <Logo />
        <button on:click={toggleMenu} class="md:hidden grid place-items-center">
        <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="{showMenu ? 'hidden md:hidden' : 'hidden md:flex'} items-center gap-4 lg:gap-6">
        <a href="/" class="{currentPath === '/' ? 'text-secondary' : ''} duration-200 hover:text-secondary cursor-pointer">Home</a>
        <a href="/services" class="{currentPath === '/services' ? 'text-secondary' : ''} duration-200 hover:text-secondary cursor-pointer">Services</a>
        <a href="/about" class="{currentPath === '/about' ? 'text-secondary' : ''} duration-200 hover:text-secondary cursor-pointer">About Us</a>
        <a href="/contact" class="contact-link">
            <button class="{currentPath === '/contact' ? 'specialBtn' : 'specialBtnDark'}">
                <p>Contact Us</p>
            </button>
        </a>
        </nav>
    </div>
    {#if showMenu}
        <div transition:slide="{{ duration: 300 }}" class="md:hidden p-4 shadow-md">
        <a href="/" class="{currentPath === '/' ? 'text-secondary' : ''} block py-2 hover:text-secondary">Home</a>
        <a href="/services" class="{currentPath === '/services' ? 'text-secondary' : ''} block py-2 hover:text-secondary">Services</a>
        <a href="/about" class="{currentPath === '/about' ? 'text-secondary' : ''} block py-2 hover:text-secondary">About Us</a>
        <a href="/contact">
            <button class="{currentPath === '/contact' ? 'specialBtn' : 'specialBtnDark'}">
                <p>Contact Us</p>
            </button>
        </a>
        </div>
    {/if}
</header>

<style>
    nav a {
        position: relative;
        text-decoration: none;
    }

    nav a::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 0%;
        height: 3px; /*** Adjust the thickness of the underline ***/
        background-color: transparent; /*** Set the initial color to transparent ***/
        transition: all 0.5s; /*** Add a transition for smooth animation ***/
    }

    nav a:hover::before {
        background-color: var(--secondary); /*** Set the color for the underline on hover ***/
        width: 100%;
    }

    nav a.contact-link::before,
        nav a.contact-link::after {
        content: none; /* Remove the underline styles */
    }
</style>