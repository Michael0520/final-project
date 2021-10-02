<template>
  <!-- <HelloWorld msg="VueCLI + Vue3 + Tailwind jit"/> -->
  <homePage msg="homePage" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homePage from './pages/homePage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    homePage
  }
}
</script>