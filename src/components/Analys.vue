<template>
  <div>
                 <div class="w-full text-white flex flex-row overflow-hidden h-[500px] border-b-2 border-teal-500 bg-teal-700">
        <div class="w-[60%] h-full flex justify-center sm:justify-start items-center"><div class="ph:text-xl xl:text-6xl sm:text-3xl">Aligning with UN SDGs</div></div>
        <div class="w-[50%] h-full relative">
          <svg class="absolute z-0 top-[130px] ph:top-[300px] sm:top-[300px] right-[80px]" width="100" height="200" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="white" stroke-width="1" fill="transparent" />
</svg>
<svg class="absolute bottom-[10px] ph:bottom-[-140px] sm:bottom-[-140px] z-0 right-[100px]" width="320" height="320" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="orange" stroke-width="2" fill="transparent" />
</svg>
        </div>
    </div>
    <!--pagecontent-->
      <div>

      <div class="flex flex-row ph:flex-wrap sm:flex-wrap text-gray-700 p-4">
    <div class="w-[50%] flex text-left  relative">
        <div class="ph:text-xl sm:text-4xl opacity-0 slidet font-bold p-4">Analysts</div>
    </div>
          <div class="w-[50%] text-gray-700">
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="ph:text-sm sm:text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Jefferies – Matt Hose</div>
       <div class="ph:text-sm sm:text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Numis – Stefan Hamill</div>
       <div class="ph:text-sm sm:text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>Redburn – Simon Baker</div>
       <div class="ph:text-sm sm:text-xl my-4"> <span class="text-yellow-500 mx-1">&mdash;</span>JP Morgan – Chris Brown</div>
       </div>
        </div>
      </div>

            <div class="flex flex-row ph:flex-wrap sm:flex-wrap bg-gray-200 text-gray-700 p-4">
    <div class="ph:w-full sm:w-full xl:w-[50%] flex text-left  relative">
        <div class="ph:text-xl sm:text-4xl opacity-0 slidet font-bold p-4">Brokers</div>
    </div>
          <div class="ph:w-full sm:w-full xl:w-[50%] text-gray-700">
              <div class="ph:text-lg sm:text-2xl opacity-0 slidet font-bold ">Goldman Sachs International</div>
            <div class="border-b-1 opacity-0 slidet border-white my-4">
        <div class="ph:text-xm sm:text-xl my-4">J120 Fleet Street</div>
       <div class="ph:text-xm sm:text-xl my-4"> London</div>
       <div class="ph:text-xm sm:text-xl my-4"> Redburn – Simon Baker</div>
       <div class="ph:text-xm sm:text-xl my-4"> United Kingdom</div>
       </div>
                     <div class="ph:text-lg sm:text-2xl opacity-0 slidet font-bold my-4">Numis Securities</div>
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="ph:text-xm sm:text-xl my-4">J120 Fleet Street</div>
       <div class="ph:text-xm sm:text-xl my-4"> London</div>
       <div class="ph:text-xm sm:text-xl my-4"> The London Stock Exchange Building</div>
       <div class="ph:text-xm sm:text-xl my-4"> 10 Paternoster Square</div>
       </div>
        </div>
      </div>

            <div class="flex flex-row ph:flex-wrap sm:flex-wrap text-gray-700 p-4">
    <div class="ph:w-full sm:w-full xl:w-[50%] flex text-left  relative">
        <div class="ph:text-xl sm:text-4xl font-bold opacity-0 slidet p-4">Financial media adviser</div>
    </div>
          <div class="ph:w-full sm:w-full xl:w-[50%] text-gray-700">
            <div class="border-b-1 opacity-0 slidet border-white">
        <div class="ph:text-xm sm:text-xl my-4">London</div>
       <div class="ph:text-xm sm:text-xl my-4"> Aldersgate Street</div>
       <div class="ph:text-xm sm:text-xl my-4"> EC1A 4HD</div>
       <div class="ph:text-xm sm:text-xl my-4"> United Kingdom</div>
       </div>
        </div>
      </div>

      
        <div class="bg-gray-700 w-full h-[500px] mt-4 p-4">
  <div class="flex justify-center text-white opacity-0 slidet p-4 ph:text-xl text-3xl"><div>RELATED CONTENT</div></div>
  <div class="flex flex-row ph:flex-wrap sm:flex-wrap justify-between p-4 h-[90%]">
   <div class="flex justify-center ph:w-full sm:w-full xl:w-[50%] opacity-0 slidet ph:border-t sm:border-t xl:border-t-0 border-gray-300 text-white ph:text-2xl sm:text-5xl items-center"><div><a class="hover:text-white hover:underline duration-500">Investor</a></div></div>
   <div class="flex justify-center ph:w-full sm:w-full xl:w-[50%] opacity-0 slidet ph:border-t sm:border-t xl:border-t-0 xl:border-l border-gray-300 ph:text-2xl text-white sm:text-5xl items-center duration-500"><div><a class="hover:text-white hover:underline duration-500">Shareholder information</a></div></div>
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