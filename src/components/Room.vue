<template>
<div id="main-component">
    <img id="menu-icon" src="https://img.icons8.com/cotton/64/000000/menu.png" />
    <WebCams id="webcams" />
    <div id="chat-window">CHAT</div>
    <div id="video-element">VID</div>
</div>
</template>

<script>
import WebCams from './WebCams';
export default {
    name: "Room",
    components: {
        WebCams
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#main-component {
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 1em;
    grid-template-rows: 10fr 60fr 45fr;
    grid-template-columns: 3fr 1fr;
}

#video-element,
#chat-window {
    border: 1px solid black;
}

#menu-icon {
    grid-column-start: 2;
    justify-self: right;
}

#menu-icon:hover {
    cursor: pointer;
}

#webcams {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
}

#chat-window {
    grid-column-start: 1;
    grid-row-start: 3;
}

#video-element {
    grid-column-start: 2;
    grid-row-start: 3;
}
</style>
