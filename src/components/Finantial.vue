<template>
  <div>
        <div class="w-full text-white flex flex-row overflow-hidden h-[500px] bg-gray-700">
        <div class="w-[60%] h-full flex justify-center sm:justify-start items-center"><div class="xl:text-6xl ph:text-xl sm:text-3xl">Financial calendar</div></div>
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
    <div class="flex flex-col">

<div class="w-full flex justify-center my-4 h-[280px]">
    <div class="w-[70%] ph:w-[98%] sm:w-[95%] opacity-0 slidet my-4">
    <div class="text-gray-700 ph:text-lg sm:text-2xl my-4">Upcoming events</div>

    <div class="flex flex-row border-y-2  my-4 p-4 border-gray-400">
        <div class="w-[32%] text-left text-teal-600 ph:text-sm sm:text-xl flex-start">16.06.22</div>
        <div class="text-gray-700 w-[32%] font-bold ph:text-sm sm:text-xl">Full Year results for the period ending 31 March 2022</div>
        <div class="w-[32%] text-right font-bold relative">
            <div @click="cal=!cal" class=" cursor-pointer"><i class="fa fa-calendar mx-2 text-yellow-500"></i><a class="hover:text-gray-700 hover:underline">Add to calendar</a></div>
             <div :class="[cal?'w-[180px]  absolute top-[30px] right-[-20px] text-center ph:text-sm sm:text-xl opacity-100 duration-500 p-4 bg-gray-700 text-white':'w-[180px]  absolute top-[30px] right-[-20px] opacity-0 duration-500 text-center text-xl p-4 bg-gray-700 text-white']">
                 <div class="my-2">iCal calendar</div>
                 <div class="my-2">iCal calendar</div>
                 <div class="my-2">iCal calendar</div>
                 <div class="my-2">iCal calendar</div>
             </div>
            </div>
    </div>
    </div>
</div>

<div class="bg-gray-200 w-full my-4 flex justify-center">
    <div class="w-[70%] ph:w-[95%] sm:w-[95%] my-4">
        <div class="text-gray-700 border-b-2 border-gray-400 opacity-0 slidet p-4 ph:text-lg sm:text-2xl font-bold my-4">Past events</div>
        <div class="border-b-2 flex flex-row ph:flex-wrap sm:flex-wrap border-gray-400 opacity-0 slidet xl:my-4 sm:my-2 p-4">
            <div class="ph:w-full sm:w-full xl:w-[32%] text-teal-600 text-xl my-4">16.06.22</div>
            <div class="text-gray-700 mx-2 ph:w-full my-4 sm:w-full xl:w-[32%] font-bold text-xl">Full Year results for the period ending 31 March 2022</div>
        </div>
                <div class="border-b-2 flex flex-row ph:flex-wrap sm:flex-wrap border-gray-400 opacity-0 slidet xl:my-4 sm:my-2 p-4">
            <div class="ph:w-full sm:w-full xl:w-[32%] text-teal-600 text-xl my-4">16.06.22</div>
            <div class="text-gray-700 mx-2 ph:w-full sm:w-full xl:w-[32%] my-4 font-bold text-xl">Interim Results for period ending 30 September 2021</div>
        </div>
                <div class="border-b-2 flex flex-row ph:flex-wrap sm:flex-wrap border-gray-400 opacity-0 slidet xl:my-4 sm:my-2 p-4">
            <div class="ph:w-full sm:w-full xl:w-[32%] text-teal-600 text-xl my-4">16.06.22</div>
            <div class="text-gray-700 mx-2 my-4 ph:w-full sm:w-full xl:w-[32%] font-bold text-xl">Full Year Results for year ending 31 March 2021</div>
        </div>
                <div class="border-b-2 flex flex-row ph:flex-wrap sm:flex-wrap border-gray-400 opacity-0 slidet xl:my-4 sm:my-2 p-4">
            <div class="ph:w-full sm:w-full xl:w-[32%] text-teal-600 text-xl my-4">16.06.22</div>
            <div class="text-gray-700 mx-2 my-4 ph:w-full sm:w-full xl:w-[32%] font-bold text-xl">Syncona Interim Results for the period ending 30 September 2020</div>
        </div>
                <div class="border-b-2 flex flex-row ph:flex-wrap sm:flex-wrap border-gray-400 opacity-0 slidet xl:my-4 sm:my-2 p-4">
            <div class="ph:w-full sm:w-full xl:w-[32%] text-teal-600 text-xl my-4">16.06.22</div>
            <div class="text-gray-700 mx-2 my-4 ph:w-full sm:w-full xl:w-[32%] font-bold text-xl">Full Year Results for the year ending 31 March 2020</div>
        </div>

    </div>
</div>

  </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        cal:false
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