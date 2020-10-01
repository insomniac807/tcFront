<template>
<div class="camera-panes" v-bind:class="{'two': isTwo, 'four': isFour, 'eight': isEight}">
    <div v-for="cam in cams" :key="cam.uid">
        <Camera uid="cam.uid" />
    </div>
</div>
</template>

<script>
import Camera from "./Camera";
export default {
    name: "WebCams",
    components: {
        Camera
    },
    data: function () {
        return {
            cams: [{
                uid: 1
            }, {
                uid: 2
            }, {
                uid: 3
            }, {
                uid: 4
            }, {
                uid: 5
            }, {
                uid: 6
            }, {
                uid: 7
            }, {
                uid: 8
            }, ],
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
    grid-template-rows: 1fr 1fr;
}

.two {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

.four {
    grid-template-columns: 1fr 1fr;
    width: 80%;
}

.eight {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
