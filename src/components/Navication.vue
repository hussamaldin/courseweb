<template>
<div class="w-full h-screen bg-opacity-25 absolute top-0 right-0">
      <div :class="[nav1?'p-4 overflow-y-auto bg-gray-700 z-50 flex flex-col fixed top-0 right-0 h-screen w-[400px]':'hidden']">
  <button @click="change()" class="absolute top-[40px] right-[40px] z-50 flex justify-center items-center group w-[30px] text-white h-[30px]"><span class="group-hover:text-yellow-500 text-4xl">x</span></button>

          <div class="flex flex-col p-4 text-lg">
              <div  class="mx-2 pt-[50px] group relative my-2">
                  <a @click="toggle($event)" class="text-3xl font-bold text-white hover:text-white" href="#">About us <i class="fa fa-angle-down text-white text-lg"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></a>
                      <ul class="mySlides hidden duration-500  p-3 flex flex-col ">
                          <li class="pt-1"><a href="/about" class="text-white  cursor-pointer duration-500 hover:underline">About</a></li>
                          <li class="pt-1"><a href="/ourpeople"  class="text-white cursor-pointer duration-500 hover:underline">Our Model</a></li>
                          <li class="pt-1"><a href="/syncona" class="text-white cursor-pointer duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-white cursor-pointer duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/culture" class="text-white cursor-pointer duration-500 hover:underline">Our purpose,cluture and values</a></li>
                          <li class="pt-1"><a href="/inspiring" class="text-white cursor-pointer duration-500 hover:underline">Our Histor</a></li>
                      </ul>

                 
              </div>
              <div class="mx-2 p-2 group relative my-2">
                  <a @click="toggle($event)"  class="text-3xl font-bold text-white hover:text-white" href="#" >Our People <i class="fa fa-angle-down text-lg text-white"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></a>
                                 
                      <ul class="mySlides hidden duration-500  p-3 flex flex-col ">
                          <li class="pt-1"><a href="/ourpeople" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our people</a></li>
                      </ul>

                  
                  </div>
              <div class="mx-2 p-2 group relative my-2">
                  <a @click="toggle($event)" class="text-3xl font-bold text-white hover:text-white" href="#">Portfolio <i class="fa fa-angle-down text-lg text-white"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></a>
                      <ul class="mySlides hidden duration-500  p-3 flex flex-col ">
                          <li class="pt-1"><a href="/portofilio" class="text-white cursor-pointer  duration-500 hover:underline">portofilio</a></li>
                          <li class="pt-1"><a href="/ourpeople" class="text-white cursor-pointer duration-500 hover:underline">Inspiring and empowring our people</a></li>
                          <li class="pt-1"><a href="/syncona" class="text-white cursor-pointer duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-white cursor-pointer duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/culture" class="text-white cursor-pointer duration-500 hover:underline">Our purpose,cluture and values</a></li>
                          <li class="pt-1"><a href="/aligin" class="text-white cursor-pointer duration-500 hover:underline">Aligining</a></li>
                           <li class="pt-1"><a href="/investment" class="text-white cursor-pointer duration-500 hover:underline">Responsible and ethical busniess</a></li>
                           <li class="pt-1"><a href="/social"  class="text-white cursor-pointer duration-500 hover:underline">Our Social Impact</a></li>
                      </ul>

                 
              
              </div>
              <div class="mx-2 p-2 group my-2"><a class="text-3xl font-bold text-white hover:text-white" href="/inspiring">Sustainabilit<hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></a></div>
              <div class="mx-2 p-2 group my-2"><a class="text-3xl font-bold text-white hover:text-white" href="/finantial">News and Insights<hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></a></div>
              <div class="mx-2 p-2 group relative my-2">
                  <a @click="toggle($event)" class="text-3xl font-bold text-white hover:text-white" href="#">Investors <i class="fa fa-angle-down text-lg text-white"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"> </a>
                                
                      <ul class="mySlides hidden duration-500  p-3 flex flex-col ">
                          <li class="pt-1"><a href="/inspiring" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Investors</a></li>
                          <li class="pt-1"><a href="/finantial" class="text-white cursor-pointer hover:text-gray-700 duration-500 hover:underline">Financial Calendear</a></li>
                          <li class="pt-1"><a href="/syncona" class="text-white cursor-pointer hover:text-gray-700 duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/kps" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Kps</a></li>
                          <li class="pt-1"><a href="/analys" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Analysts and adviser</a></li>
                          <li class="pt-1"><a href="/investment" class="text-white  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our Histor</a></li>
                      </ul>

                 
                  </div>
              <div class="mx-2 p-2 group my-2"><a class="text-3xl font-bold text-white hover:text-white" href="/contact">Contact</a><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></div>
              <div class="mx-2 p-2 group my-2"><span class="w-[30px] h-[30px] rounded-full bg-yellow-500 flex justify-center items-center"><i class="fas fa-instagram text-white text-2xl"></i></span><span class="w-[30px] h-[30px] rounded-full bg-yellow-500 flex justify-center items-center"><i class="fa fa-twitter text-white text-2xl"></i></span></div>
          </div>

      </div>
      </div>
</template>

<script>
export default {
data(){
    return{
           post:[
             {
               id:1,

               active:false
             },
                  {
               id:2,

               active:false
             },
                 {
               id:3,

               active:false
             },
                  {
               id:4,
               active:false
             },
                               {
               id:5,
               active:false
             },
                               {
               id:6,
               active:false
             },
                               {
               id:7,
               active:false
             },
           ]
    }
},
computed:{
        nav1(){
        return this.$store.state.nav1
    }
},
methods:{
        toggle(event){
            var y = document.getElementsByClassName("mySlides");
                    var i;
  for (i = 0; i < y.length; i++) {
      if(y[i] == event.target.nextSibling){
     console.log('vrv')
      }
      else{
         y[i].classList.replace('block','hidden') 
      }
  }
      if(event.target.nextSibling.classList.contains('hidden') ){
         event.target.nextSibling.classList.replace('hidden','block') 
          console.log('yes')
      }
      else{
           event.target.nextSibling.classList.replace('block','hidden') 
      }

    
        },
            change(){
        this.$store.commit('change1')
    }
},

}
</script>

<style>

</style>