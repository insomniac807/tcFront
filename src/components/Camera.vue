<template>
<div class="camera">
    <div class="username">Random-Name</div>
</div>
</template>

<script>
export default {
    name: "Camera",
    props: ['uid']
}
</script>

<style scoped>
.camera {
    position: relative;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    background-image: url("../assets/tsLogo.png");
    background-size: cover;
    background-position: center;
}

.username {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(25, 25, 25, 0.5);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 50px;
}
</style>
