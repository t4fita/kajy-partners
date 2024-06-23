<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Box from "../components/BoxAnimation.svelte";
</script>

<SectionWrapper>
    <Box/>
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe 
            width="100%" height="100%" class="absolute inset-0" 
            style="filter: grayscale(1) contrast(1.2) opacity(0.6);" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.6103154496936!2d47.503891725999026!3d-18.90436115719343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e225d554e89%3A0x5506a098cbadcdb2!2sINSCAE%2067Ha%2C%2067ha%20Boulevard%20Pierre%20Rajaonah%2C%20Antananarivo!5e0!3m2!1sen!2smg!4v1718054391999!5m2!1sen!2smg">
        </iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-secondary tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1">6e étage INSCAE 67Ha, 67ha Boulevard Pierre Rajaonah, Antananarivo, Madagascar</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-secondary tracking-widest text-xs">EMAIL</h2>
            <a class="text-indigo-500 leading-relaxed">contact@kajy-partners.com</a>
            <h2 class="title-font font-semibold text-secondary tracking-widest text-xs mt-4">PHONE</h2>
            <p class="leading-relaxed">123-456-7890</p>
            </div>
        </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-primary text-lg mb-1 font-medium title-font">Contact Us</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Tell us how we can help you and we'll get back to you as soon as possible.</p>
        <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button class="specialBtnDark">
            Send
        </button>
    </div>
</SectionWrapper>
