<script>
    import { onMount } from 'svelte';

    onMount(() => {
        
    });
    
</script>

<div class="logos">
    <div class="logos-slide animate-infinite-scroll">
        <img src="/badge/AFM.png" alt="Advanced Financial Modeler">
        <img src="/badge/FMVA.png" alt="Financial Modeling and Valuation Analyst">
        <img src="/badge/CBCA.png" alt="Commercial Banking and Credit Analyst">
        <img src="/badge/BIDA.png" alt="Business Intelligence and Data Analyst">
        <img src="/badge/FPWM.png" alt="Financial Planner and Wealth Manager">
        <img src="/badge/DA.png" alt="DataCamp Certified Data Analyst"> 
    </div>

    <div class="logos-slide animate-infinite-scroll aria-hidden='true'">
        <img src="/badge/AFM.png" alt="">
        <img src="/badge/FMVA.png" alt="">
        <img src="/badge/CBCA.png" alt="">
        <img src="/badge/BIDA.png" alt="">
        <img src="/badge/FPWM.png" alt=""> 
        <img src="/badge/DA.png" alt=""> 
    </div>
</div>

<style>
    


    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    .logos {
    padding: 60px 0px;
    background: white;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    
    }

    .logos:before,
    .logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
    }

    .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    }

    .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    }

    .logos:hover .logos-slide {
    animation-play-state: paused;
    }

    .logos-slide img {
       transition: transform 0.3s;
    }
    
    .logos-slide img:hover {
        transform: translateY(-10px) scale(1.1);
    }
    .logos-slide {
    display: inline-block;
    
    }

    .logos-slide img {
    height: 100px;
    width: auto;
    margin: 0 40px;

    display: inline-block;
    }




</style>