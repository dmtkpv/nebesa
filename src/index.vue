<!--
    Styles
-->

<style>

    .app {
        position: fixed;
        inset: 0;
        perspective: 700px;
    }
    .app div {
        position: absolute;
        inset: 0;
        transform-style: preserve-3d;
    }

    .app .view {
        /*transform: rotateY(0deg) translateX(50%);*/
        animation: view 5s ease-in-out infinite;
    }
    @keyframes view {
        /*0% { transform: rotateY(0deg) translateX(0%) }*/
        50% { transform: rotateY(90deg) translate3d(50%, 0, 350px) }
    }


    .app .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10vw;
        font-weight: bold;
        transform: translateZ(-350px);
    }

    .app .clouds {
        background: rgba(0,0,255,.2);
    }
    .app .clouds:nth-child(2) { transform: translateZ(-100px) }
    .app .clouds:nth-child(3) { transform: translateZ(-200px) }
    .app .clouds:nth-child(4) { transform: translateZ(-300px) }
    .app .clouds:nth-child(5) { transform: translateZ(-400px) }
    .app .clouds:nth-child(6) { transform: translateZ(-500px) }
    .app .clouds:nth-child(7) { transform: translateZ(-600px) }

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