<script>
    import SectionWrapper from "./SectionWrapper.svelte";
  
    let activeTab = 'about'; // Default active tab
                  
        
    function setActiveTab(tab) {
        activeTab = tab;
    }
  </script>
  
  
  <SectionWrapper>

    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div class="lg:w-4/5 mx-auto flex flex-wrap justify-between">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">Chief Executive Officer</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Kiraën Andriamandimbisoa</h1>
                



                
                
                <div>
                <div class="tabs">
                    <button
                    class:active={activeTab === 'about'}
                    on:click={() => setActiveTab('about')}>About</button>
                    <button
                    class:active={activeTab === 'education'}
                    on:click={() => setActiveTab('education')}>Education</button>
                    <button
                    class:active={activeTab === 'experience'}
                    on:click={() => setActiveTab('experience')}>Experience</button>
                </div>
                <div class="tab-content">
                    {#if activeTab === 'about'}
                        <div>
                        <!-- About tab content -->
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam architecto ipsa soluta ipsam itaque totam at, temporibus laudantium excepturi fuga vitae voluptates quos natus culpa mollitia delectus saepe neque!</p>
                        <!-- Add your About content here -->
                        </div>
                    {:else if activeTab === 'education'}
                        <div>
                            <!-- tab content -->
                            <div class="-my-6">

                                <!-- Item #1 -->
                                <div class="relative pl-8 sm:pl-32 py-6 group">
                                    <!-- Purple label -->
                                    <div class=" font-medium text-2xl text-secondary mb-1 sm:mb-0">INSCAE Madagascar</div>
                                    <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                                    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-secondary rounded-full">May, 2020</time>
                                        <div class="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                                    </div>
                                    <!-- Content -->
                                    <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                                </div>
                                
                                <!-- Item #2 -->
                                <div class="relative pl-8 sm:pl-32 py-6 group">
                                    <!-- Purple label -->
                                    <div class=" font-medium text-2xl text-secondary mb-1 sm:mb-0">ESSCA Antanimena</div>
                                    <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                                    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-secondary rounded-full">May, 2021</time>
                                        <div class="text-xl font-bold text-slate-900">Reached 5K customers</div>
                                    </div>
                                    <!-- Content -->
                                    <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                                </div>
                            </div>
                            <!-- Add your Education content here -->
                        </div>
                    {:else if activeTab === 'experience'}
                    <div>
                        <!-- tab content -->
                        <div class="-my-6">

                            <!-- Item #1 -->
                            <div class="relative pl-8 sm:pl-32 py-6 group">
                                <!-- Purple label -->
                                <div class=" font-medium text-2xl text-secondary mb-1 sm:mb-0">Kajy Partners</div>
                                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-secondary rounded-full">May, 2020</time>
                                    <div class="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                                </div>
                                <!-- Content -->
                                <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>
                            
                            <!-- Item #2 -->
                            <div class="relative pl-8 sm:pl-32 py-6 group">
                                <!-- Purple label -->
                                <div class=" font-medium text-2xl text-secondary mb-1 sm:mb-0">HV Industries</div>
                                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-secondary rounded-full">May, 2021</time>
                                    <div class="text-xl font-bold text-slate-900">Reached 5K customers</div>
                                </div>
                                <!-- Content -->
                                <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>
                        </div>
                        <!-- Add your Education content here -->
                    </div>
                    {/if}
                </div>
            </div>
                
                
                

                
            </div>
            
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img alt="Kiraën" class="object-cover object-center rounded" src="/company/Kiraen.jpg">
            </div>

        </div>
    </div>
      
  </SectionWrapper>

  <style>
    .tabs {
        display: flex;
    }
    
    .tabs button {
        padding: 10px 20px;
        cursor: pointer;        
    }

    .tabs button:hover{
        color: var(--secondary);
        background-color: transparent;

    }
    
    .tabs button.active {
        border-bottom: 2px solid var(--primary);
        font-weight: bold;
    }
    
    .tab-content {
        padding: 20px;
        border-top: none;
    }
  </style>