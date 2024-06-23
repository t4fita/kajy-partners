<script>
  import BoxAnimation from "./BoxAnimation.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  import BadgeCarousel from "./BadgeCarousel.svelte";
</script>

<SectionWrapper>
    <BoxAnimation/>
    
    <div class="container px-3 py-6 mx-auto">
      <div class="flex flex-wrap w-full mb-10 flex-col items-center ">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      <div class="team flex flex-wrap -m-4">

        <div class="p-4 lg:w-1/3 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-96 object-cover object-center mb-4" src="/company/NT.jpg">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg duration-200 hover:text-secondary cursor-pointer">Ny Tsiory</h2>
              <h3 class="text-gray-500 mb-3">COO - Financial Modeling & Analytics Expert</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              
            </div>
          </div>
        </div>
        
        <div class="p-4 lg:w-1/3 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center">
            <a href="/about/kiraen">
              <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-96 object-cover object-center mb-4" src="/company/Kiraen.jpg">
            </a>
              <div class="w-full">
              <a href="/about/kiraen">
                <h2 class="title-font font-medium text-lg duration-200 hover:text-secondary cursor-pointer">Kiraën</h2>
              </a>
              <h3 class="text-gray-500 mb-3">CEO - Finance  & Strategy Expert</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              
            </div>
          </div>
        </div>

        
        <div class="p-4 lg:w-1/3 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-96 object-cover object-center mb-4" src="https://dummyimage.com/202x202">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg duration-200 hover:text-secondary cursor-pointer">Tafita</h2>
              <h3 class="text-gray-500 mb-3">CTO - Lead Quantitative Developer</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              
            </div>
          </div>
        </div>
        
      </div>
      <div class="flex flex-col text-center w-full mb-20">
        <BadgeCarousel/>
      <div/>
    </div>
</SectionWrapper>

<style>
  .team img {
      transition: transform 0.3s;
      cursor: pointer;
  }

  .team img:hover {
      transform: translateY(-10px) scale(1.05);
  }
</style>