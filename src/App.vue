<template>
    <v-app>
       <NavBar class="nav"></NavBar>
      <router-view/>
    </v-app>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default ({
  components:{
    NavBar
  }
})
</script>

<style lang="scss">
  .nav{
    max-height: 8vh;
  }
</style>
