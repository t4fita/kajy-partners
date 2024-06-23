<script>
  import SplitType from 'split-type';
  import gsap from 'gsap';

  import { onMount } from 'svelte';
  onMount(() => {
    let text = new SplitType('#text');
    let characters = document.querySelectorAll('.char');

    for(let i=0; i<characters.length; i++){
        characters[i].classList.add('translate-y-full')
    }

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.25
    })
  });
</script>




<h2
    id = "text"
    class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
>
    <div 
    style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);">
        Your business
        <span class="text-primary">Partner</span>
        <br />
    </div>

    <div 
    style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);">
        for better
        <span class="text-secondary">Decisions</span>
    </div>
</h2>