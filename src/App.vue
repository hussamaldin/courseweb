<template>
  <div class="w-full h-full relative">
      <Navbar />
      <router-view />
      <Footer />
      <Navication />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Navication from './components/Navication.vue';
export default {
  name:'App',
    components: {
    Navbar,Footer,Navication
  },
  data(){
    return{
    }
    
}
}
</script>

