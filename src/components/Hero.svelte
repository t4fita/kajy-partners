<script>
    import { expoOut } from "svelte/easing";
    import CtAs from "./CTAs.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import Box from "../components/BoxAnimation.svelte";
</script>


<SectionWrapper>
    <Box/>
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <h2
            class="fade-in text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
        > Your business 
            <span class="text-primary">Partner</span><br /> 
            for better <span class="text-secondary">Decisions</span>
        </h2>
        <p
            class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full"
        >
            Maximize your added value. We're the <span class="text-primary">One-Stop-Shop</span> for <span
                class="italic"
                >data driven decisions, financial insights and modeling, tailored management tools</span
            > and so much more.
        </p>
        <CtAs />


    </div>
</SectionWrapper>
