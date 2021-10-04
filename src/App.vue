<template>
    <!-- <HelloWorld msg="VueCLI + Vue3 + Tailwind jit"/> -->
    <homePage msg="homePage" />
    <room-detail-page msg="detailPage" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homePage from "./pages/homePage.vue";
import RoomDetailPage from "./pages/room-detailPage.vue";

export default {
    name: "App",
    components: {
        // HelloWorld,
        homePage,
        RoomDetailPage,
    },
};
</script>