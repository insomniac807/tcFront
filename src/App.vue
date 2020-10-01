<template>
<div id="app">
    <Room />
</div>
</template>

<script>
import Room from "./components/Room.vue";

export default {
    name: "App",
    components: {
        Room
    }
};
</script>

<style>
#app {
    height: 100vh;
    width: 100vw;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
    padding: 1em;
}
</style>
