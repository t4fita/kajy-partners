<script>
    // Function to generate random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate random float between min and max (inclusive)
    function getRandomFloat(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    const squares = Array.from({ length: 11 }, () => {
        return {
            top: `${getRandomInt(0, 100)}%`,
            left: `${getRandomInt(0, 100)}%`,
            border: `6px solid var(--${Math.random() < 0.5 ? 'primary' : 'secondary'})`
        };
    });
</script>

<div class="box-animation-container">
    <div class="box">
        {#each squares as square, i}
            <div class="square" style={`--delay: ${i * 2}s; top: ${square.top}; left: ${square.left}; border: ${square.border};`} />
        {/each}
    </div>
</div>

<style>
    .box-animation-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }
    .box {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .box div {
        position: absolute;
        width: 40px;
        height: 60px;
        background-color: transparent;
    }

    .box div:nth-child(1){
        animation: animate 10s linear infinite;
    }
    .box div:nth-child(2){
        animation: animate 7s linear infinite;
    }
    .box div:nth-child(3){
        animation: animate 12s linear infinite;
    }
    .box div:nth-child(4){
        animation: animate 9s linear infinite;
    }
    .box div:nth-child(5){
        animation: animate 5s linear infinite;
    }
    .box div:nth-child(6){
        animation: animate 13s linear infinite;
    }
    .box div:nth-child(7){
        animation: animate 16s linear infinite;
    }
    .box div:nth-child(8){
        animation: animate 11s linear infinite;
    }
    .box div:nth-child(9){
        animation: animate 5s linear infinite;
    }
    .box div:nth-child(10){
        animation: animate 10s linear infinite;
    }
    .box div:nth-child(11){
        animation: animate 10s linear infinite;
    }
    .box div:nth-child(12){
        animation: animate 7s linear infinite;
    }
    .box div:nth-child(13){
        animation: animate 12s linear infinite;
    }
    .box div:nth-child(14){
        animation: animate 9s linear infinite;
    }
    .box div:nth-child(15){
        animation: animate 5s linear infinite;
    }
    .box div:nth-child(16){
        animation: animate 13s linear infinite;
    }
    .box div:nth-child(17){
        animation: animate 16s linear infinite;
    }
    .box div:nth-child(18){
        animation: animate 11s linear infinite;
    }
    .box div:nth-child(19){
        animation: animate 5s linear infinite;
    }

    @keyframes animate {
        0% {
            transform: scale(0) translateY(0) rotate(0);
            opacity: 1;
        }

        100% {
            transform: scale(1.3) translateY(-90px) rotate(360deg);
            opacity: 0;
        }
    }
</style>
