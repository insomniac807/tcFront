<template>
<div class="camera-panes" v-bind:class="{'two': isTwo, 'four': isFour, 'eight': isEight}">
    <div v-for="webcam in allWebcams" :key="webcam.uid">
        <Camera uid="webcam.uid" />
    </div>
</div>
</template>

<script>
import Camera from "./Camera";
import {
    mapGetters
} from 'vuex';

export default {
    name: "WebCams",
    computed: mapGetters(['allWebcams']),
    components: {
        Camera
    },
    data: function () {
        return {
            isTwo: false,
            isFour: false,
            isEight: true,
        }
    },
    methods: {}
}
</script>

<style scoped>
.camera-panes {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 1em;
}

.two {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

.four,
.eight {
    grid-template-rows: 1fr 1fr;
}

.four {
    grid-template-columns: 1fr 1fr;
    width: 80%;
}

.eight {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
