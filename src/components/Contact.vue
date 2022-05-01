<template>
  <div class="w-full h-full">
                <div class="w-full text-white flex flex-row overflow-hidden h-[500px] border-b-2 border-teal-500 bg-teal-700">
        <div class="w-[50%] h-full flex justify-center items-center"><div class="text-7xl">Portofilio</div></div>
        <div class="w-[50%] h-full relative">
          <svg class="absolute z-0 top-[130px] right-[80px]" width="100" height="200" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="black" stroke-width="1" fill="transparent" />
</svg>
<svg class="absolute bottom-[80px] z-0 right-[350px]" width="290" height="290" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="white" stroke-width="1" fill="transparent" />
</svg>
          <img class="mask mask-hexagon-2 absolute bottom-[-50px] left-[130px] w-[400px] h-[400px]" :src="img1" />
        </div>
    </div>
<!--PageContent-->
    <div class="w-full flex flex-col">

          <div class="w-full h-[400px] p-4 bg-gray-200 flex flex-row">
        <div class="text-4xl w-[50%] opacity-0 slidet p-4 text-gray-600">Getting in touch with us</div>
        <div class="w-[50%] opacity-0 slidet text-xl text-gray-600 p-4">Find contact details below tailored to the nature of your enquiry.y</div>
</div>

<div class="p-4 w-full">
    <div class="flex flex-row flex-wrap w-full">
    <div class="w-[30%] mx-3 opacity-0 slidet my-4 flex flex-col border-t-2 border-gray-300">
        <div class="text-gray-700 text-4xl my-3">Life Science Investment Opportunities</div>
        <div class="text-2xl text-gray-500 my-3">2nd Floor, 8 Bloomsbury Street,London, WC1B 3SR</div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-envelope text-xl text-yellow-500"></i></span>contact@synconaltd.com</a></div>
    </div>
        <div class="w-[30%] mx-3 opacity-0 slidet my-4 flex flex-col border-t-2 border-gray-300">
        <div class="text-gray-700 text-4xl my-3">Life Science Investment Opportunities</div>
        <div class="text-2xl text-gray-500 my-3">2nd Floor, 8 Bloomsbury Street,London, WC1B 3SR</div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-phone-alt text-xl text-yellow-500"></i></span>0871 664 0321(UK)</a></div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-phone-alt text-xl text-yellow-500"></i></span>+44 (0)20 8639 3399(Rest of world)</a></div>

    </div>
        <div class="w-[30%] mx-3 opacity-0 slidet my-4 flex flex-col border-t-2 border-gray-300">
        <div class="text-gray-700 text-4xl my-3">Life Science Investment Opportunities</div>
        <div class="text-2xl text-gray-500 my-3">FTI ConsultingBen Atwell / Natalie Garland-Collins / Tim Stamper</div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-phone-alt text-xl text-yellow-500"></i></span>+44 (0) 20 3727 1000</a></div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-envelope text-xl text-yellow-500"></i></span>contact@synconaltd.com</a></div>
    </div>
            <div class="w-[30%] mx-3 opacity-0 slidet my-4 flex flex-col border-t-2 border-gray-300">
        <div class="text-gray-700 text-4xl my-3">Media enquiries</div>
        <div class="text-2xl text-gray-500 my-3"><span class="p-2"><i class="fas fa-phone-alt text-xl text-yellow-500"></i></span>020 3981 7909</div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-envelope text-xl text-yellow-500"></i></span>contact@synconaltd.com</a></div>
    </div>
            <div class="w-[30%] mx-3 opacity-0 slidet my-4 flex flex-col border-t-2 border-gray-300">
        <div class="text-gray-700 text-4xl my-3">Life Science Investment Opportunities</div>
        <div class="text-2xl text-gray-500 my-3">2nd Floor, 8 Bloomsbury Street,London, WC1B 3SR</div>
        <div class="my-3"><a class="hover:text-gray-600 underline"><span class="p-2"><i class="fas fa-envelope text-xl text-yellow-500"></i></span>contact@synconaltd.com</a></div>
    </div>
    </div>
</div>

        <div class="bg-gray-700 w-full h-[500px] my-4 p-4">
  <div class="flex justify-center text-white p-4 opacity-0 slidet text-3xl"><div>RELATED CONTENT</div></div>
  <div class="flex flex-row justify-between p-4 h-[90%]">
   <div class="flex justify-center w-[50%] opacity-0 slidet text-white text-5xl items-center"><div><a class="hover:text-white hover:underline duration-500">About Us</a></div></div>
   <div class="flex justify-center w-[50%] opacity-0 slidet border-l border-gray-300 text-white text-5xl items-center duration-500"><div><a class="hover:text-white hover:underline duration-500">Investor</a></div></div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
data(){
  return{

  }
},
  mounted(){
   window.addEventListener('scroll', this.onLoaded);
  },
 methods:{
       onLoaded(){
     var page=window.pageYOffset
     var x = document.getElementsByClassName("slidet");
     var i;
     console.log(page)
       console.log(x[0].getBoundingClientRect().top)
          for (i = 0; i < x.length; i++) {

              var c=x[i].getBoundingClientRect().top
            if(c <= 600){
       x[i].classList.replace("opacity-0","opacity-100");  
       x[i].classList.add("animate__animated" ,"animate__fadeInUp" ,"animate__slow") 
            } 
       
  }
       },

 }
}
</script>

<style>

</style>