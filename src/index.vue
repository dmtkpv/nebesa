<!--
    Styles
-->

<style>

    .app {
        position: fixed;
        inset: 0;
        perspective: 700px;
        perspective-origin: 50% 0;
        animation: app 5s ease-in-out infinite;
    }
    @keyframes app {
        /*50% { perspective-origin: 50% 50% }*/
    }

    .app div {
        position: absolute;
        inset: 0;
        transform-style: preserve-3d;
    }

    .app .view {
        transform: translateY(80%);
        animation: view 5s ease-in-out infinite;
    }
    @keyframes view {
        50% { transform: translateY(0%) }
    }


    .app .title {
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        font-size: 10vw;
        font-weight: bold;
        transform: translateZ(-250px);
    }

    .app .clouds {
        background: rgba(0,0,255,.2);
    }
    .app .clouds:nth-child(2) { transform: translateZ(-0px) }
    .app .clouds:nth-child(3) { transform: translateZ(-100px) }
    .app .clouds:nth-child(4) { transform: translateZ(-200px) }
    .app .clouds:nth-child(5) { transform: translateZ(-300px) }
    .app .clouds:nth-child(6) { transform: translateZ(-400px) }
    .app .clouds:nth-child(7) { transform: translateZ(-500px) }

</style>



<!--
    Template
-->

<template>
    <div class="app">
        <div class="view">
            <div class="title">CLOUD9</div>
            <div class="clouds"></div>
            <div class="clouds"></div>
            <div class="clouds"></div>
            <div class="clouds"></div>
            <div class="clouds"></div>
            <div class="clouds"></div>
        </div>
    </div>
</template>



<!--
    Scripts
-->

<script setup>



</script>