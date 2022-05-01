<template>
  <div>
                 <div class="w-full text-white flex flex-row overflow-hidden h-[500px] border-b-2 border-teal-500 bg-teal-700">
        <div class="w-[60%] h-full flex justify-center items-center"><div class="text-6xl">Aligning with UN SDGs</div></div>
        <div class="w-[50%] h-full relative">
          <svg class="absolute z-0 top-[130px] right-[80px]" width="100" height="200" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="white" stroke-width="1" fill="transparent" />
</svg>
<svg class="absolute bottom-[10px] z-0 right-[100px]" width="320" height="320" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="orange" stroke-width="2" fill="transparent" />
</svg>
        </div>
    </div>
    <!--pagecontent-->
      <div>

      <div class="flex flex-row text-gray-700 p-4">
    <div class="w-[50%] flex text-left  relative">
        <div class="text-4xl opacity-0 slidet font-bold p-4">Analysts</div>
    </div>
          <div class="w-[50%] text-gray-700">
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Jefferies – Matt Hose</div>
       <div class="text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Numis – Stefan Hamill</div>
       <div class="text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Redburn – Simon Baker</div>
       <div class="text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>JP Morgan – Chris Brown</div>
       </div>
        </div>
      </div>

            <div class="flex flex-row bg-gray-200 text-gray-700 p-4">
    <div class="w-[50%] flex text-left  relative">
        <div class="text-4xl opacity-0 slidet font-bold p-4">Brokers</div>
    </div>
          <div class="w-[50%] text-gray-700">
              <div class="text-2xl opacity-0 slidet font-bold ">Goldman Sachs International</div>
            <div class="border-b-1 opacity-0 slidet border-white my-4">
        <div class="text-xl my-4">J120 Fleet Street</div>
       <div class="text-xl my-4"> London</div>
       <div class="text-xl my-4"> Redburn – Simon Baker</div>
       <div class="text-xl my-4"> United Kingdom</div>
       </div>
                     <div class="text-2xl opacity-0 slidet font-bold my-4">Numis Securities</div>
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="text-xl my-4">J120 Fleet Street</div>
       <div class="text-xl my-4"> London</div>
       <div class="text-xl my-4"> The London Stock Exchange Building</div>
       <div class="text-xl my-4"> 10 Paternoster Square</div>
       </div>
        </div>
      </div>

            <div class="flex flex-row text-gray-700 p-4">
    <div class="w-[50%] flex text-left  relative">
        <div class="text-4xl font-bold opacity-0 slidet p-4">Financial media adviser</div>
    </div>
          <div class="w-[50%] text-gray-700">
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="text-xl my-4">London</div>
       <div class="text-xl my-4"> Aldersgate Street</div>
       <div class="text-xl my-4"> EC1A 4HD</div>
       <div class="text-xl my-4"> United Kingdom</div>
       </div>
        </div>
      </div>

      
        <div class="bg-gray-700 w-full h-[500px] mt-4 p-4">
  <div class="flex justify-center text-white opacity-0 slidet p-4 text-3xl"><div>RELATED CONTENT</div></div>
  <div class="flex flex-row justify-between p-4 h-[90%]">
   <div class="flex justify-center w-[50%] opacity-0 slidet text-white text-5xl items-center"><div><a class="hover:text-white hover:underline duration-500">Investor</a></div></div>
   <div class="flex justify-center w-[50%] opacity-0 slidet border-l border-gray-300 text-white text-5xl items-center duration-500"><div><a class="hover:text-white hover:underline duration-500">Shareholder information</a></div></div>
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