<template>
  <div class="w-full h-full">
    <div class="w-full text-white flex flex-row overflow-hidden h-[500px] border-b-2 border-teal-500 bg-teal-700">
        <div class="w-[50%] h-full flex justify-center items-center"><div class="text-7xl">About Us</div></div>
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
    <div class="flex w-full opacity-0 slidet flex-col">

      <div class="w-full h-[350px] p-4 flex flex-row text-white">
        <div class="text-4xl w-[50%] opacity-0 slidet p-4 text-gray-600">We invest to extend and enhance human life</div>
        <div class="w-[50%] opacity-0 slidet text-xl text-gray-600 p-4">Our strategy is to create a diversified portfolio of 15-20 globally leading healthcare companies with a goal, over a rolling 10-year basis, of delivering three to five companies in which we retain a significant ownership position to the point of product approval. We focus on developing treatments for patients by working in close partnership with world-class academic founders and management teams.</div>
      </div>

      <div class="w-full opacity-0 slidet text-gray-100 p-4 bg-gray-700 my-4">
        <div class="flex justify-center opacity-0 slidet text-white text-xl"><div>OUR BUSINESS IN NUMBERS*</div></div>
        <div class="flex flex-col justify-center p-4">
          <div class="flex flex-row justify-center my-4 p-4">
            <div class=" w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl text-gray-300 border-b-2 border-white p-2">11</div>
              <div class="text-xl p-2">portfolio companies</div>
            </div>
            <div class="w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl text-gray-300 border-b-2 border-white p-2">£843m</div>
              <div class="text-xl p-2">value of life science portfolio</div>
            </div>
              <div class=" w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl text-gray-300 border-b-2 border-white p-2">£497m</div>
              <div class="text-xl p-2">capital pool</div>
            </div>
            
          </div>
          <div class="flex flex-row justify-center my-4 p-4">
            <div class=" w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl border-b-2 border-white p-2">14</div>
              <div class="text-xl p-2">members of the investment team</div>
            </div>
            <div class="w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl border-b-2 border-white p-2">79%</div>
              <div class="text-xl p-2">investment team with PhDs/MDs</div>
            </div>
              <div class=" w-[30%] opacity-0 slidet mx-2 flex flex-col">
              <div class="text-5xl border-b-2 border-white p-2">16</div>
              <div class="text-xl p-2">portfolio company board seats</div>
            </div>
            
          </div>
        </div>
      </div>

<div class="p-4 w-full h-[650px]">
  <div class="flex flex-row h-full justify-between items-center p-4">
        <div class="w-[47%] opacity-0 slidet">
          <img :src="img2" class="w-full h-full">
    </div>
    <div class="w-[43%] opacity-0 slidet h-[80%] flex flex-col justify-center items-center">
      <div class="w-[85%] text-gray-700">
      <div class="text-3xl text-left font-bold my-4">Making a positive contribution</div>
      <div class="text-lg  text-left my-4">We are committed to managing our business in a sustainable way, investing responsibly, and supporting our portfolio companies in making positive contributions to society by developing treatments that will make a difference to the lives of patients and their families.</div>
      <div class="flex justify-start my-4"><div class="w-[200px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Who We Are</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
      </div>
    </div>
  </div>
</div>

<div class="p-4 w-full h-[650px]">
  <div class="flex flex-row h-full justify-between items-center p-4">
    <div class="w-[45%] opacity-0 slidet h-[80%] flex flex-col justify-center items-center">
      <div class="w-[85%] text-gray-700">
      <div class="text-3xl text-left font-bold my-4">Making a positive contribution</div>
      <div class="text-lg  text-left my-4">We are committed to managing our business in a sustainable way, investing responsibly, and supporting our portfolio companies in making positive contributions to society by developing treatments that will make a difference to the lives of patients and their families.</div>
      <div class="flex justify-start my-4"><div class="w-[350px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 group-hover:text-white">PURPOSE, CULTURE AND VALUES</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
      </div>
    </div>
            <div class="w-[47%] opacity-0 slidet">
          <img :src="img3" class="w-full h-full">
    </div>
  </div>
</div>

<div class="p-4 w-full h-[650px]">
  <div class="flex flex-row h-full justify-between items-center p-4">
        <div class="w-[47%] opacity-0 slidet">
          <img :src="img4" class="w-full h-full">
    </div>
    <div class="w-[45%] opacity-0 slidet h-[80%] flex flex-col justify-center items-center">
      <div class="w-[85%] text-gray-700">
      <div class="text-3xl text-left font-bold my-4">Making a positive contribution</div>
      <div class="text-lg  text-left my-4">We are committed to managing our business in a sustainable way, investing responsibly, and supporting our portfolio companies in making positive contributions to society by developing treatments that will make a difference to the lives of patients and their families.</div>
      </div>
    </div>
  </div>
</div>

<div class="p-4 w-full h-[650px]">
  <div class="flex flex-row h-full justify-between items-center p-4">
    <div class="w-[45%] opacity-0 slidet h-[80%] flex flex-col justify-center items-center">
      <div class="w-[85%] text-gray-700">
      <div class="text-3xl text-left font-bold my-4">Making a positive contribution</div>
      <div class="text-lg  text-left my-4">We are committed to managing our business in a sustainable way, investing responsibly, and supporting our portfolio companies in making positive contributions to society by developing treatments that will make a difference to the lives of patients and their families.</div>
      <div class="flex justify-start my-4"><div class="w-[200px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Who We Are</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
      </div>
    </div>
            <div class="w-[47%] opacity-0 slidet">
          <img :src="img5" class="w-full h-full">
    </div>
  </div>
</div>

<div class="bg-teal-600 w-full h-[500px] flex flex-col justify-center items-center">
<div class="text-white text-4xl w-[60%] opacity-0 slidet p-4">“Our strategy is clear. Syncona is building
   a sustainable, diversified portfolio of 15-20
    companies over a rolling 10-year period.”</div>
    <div class="flex flex-col justify-center p-4 opacity-0 slidet">
      <div class="text-white text-xl text-center p-2">MELANIE GEE</div>
      <div class="text-gray-200 text-xl p-2">CHAIR, SYNCONA LTD</div>
    </div>
</div>

<div class="w-full my-4">
  <div class="flex justify-center opacity-0 slidet p-4"><div class="text-2xl">ALSO IN THIS SECTION</div></div>
  <div class="flex flex-row flex-wrap justify-center p-4">
    <div class="w-[45%] m-4 opacity-0 slidet">
      <div class="w-full"><img :src="img1" class="w-full h-[400px]"></div>
      <div class="text-3xl font-bold my-4">A data-driven investment process</div>
      <div class="my-4">Our data driven investment process leverages the team’s significant expertise.</div>
       <div class="my-4"><div class="w-[250px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Find Out More</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
    </div>
    <div class="w-[45%] m-4 opacity-0 slidet">
      <div class="w-full"><img :src="img1" class="w-full h-[400px]"></div>
      <div class="text-3xl font-bold my-4">A data-driven investment process</div>
      <div class="my-4">Syncona was co-founded in 2012 by the Wellcome Trust, the premium charitable funder of life sciences in the UK. The business was set up to address the lack of long-term funding in UK life science by creating globally competitive, sustainable companies.</div>
       <div class="my-4"><div class="w-[250px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Find Out More</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
    </div>
    <div class="w-[45%] m-4 opacity-0 slidet">
      <div class="w-full"><img :src="img1" class="w-full h-[400px]"></div>
      <div class="text-3xl font-bold my-4">A data-driven investment process</div>
      <div class="my-4">Our data driven investment process leverages the team’s significant expertise.</div>
       <div class="my-4"><div class="w-[250px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Find Out More</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
    </div>
    <div class="w-[45%] m-4 opacity-0 slidet">
      <div class="w-full"><img :src="img1" class="w-full h-[400px]"></div>
      <div class="text-3xl font-bold my-4">A data-driven investment process</div>
      <div class="my-4">We found, build and fund companies around exceptional science in areas of high unmet medical need, where there is potential to take product to market.</div>
       <div class="my-4"><div class="w-[250px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">Find Out More</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>
    </div>
  </div>
</div>


<div class="p-4">
<div class="flex text-gray-500 flex-row justify-between py-[45px]">
  <div class="text-2xl opacity-0 slidet">Latest Video</div>
  <div class="flex flex-row opacity-0 slidet justify-between items-center">
    <div class="text-xl mx-2"><span>{{page}}</span>/<span>3</span></div><div class="flex flex-row justify-between items-center"><button @click="prev" :disabled="page === 1" :class="[page==1 ? 'mx-2  flex justify-center items-center duration-500 w-[50px] h-[50px]  border-2 border-gray-300 rounded-full':'mx-2  flex justify-center items-center duration-500 w-[50px] h-[50px] group hover:bg-gray-700 border-2 border-gray-700 rounded-full']"><i :class="[page==1 ?'fas fa-long-arrow-alt-left text-gray-400 text-xl':'fas fa-long-arrow-alt-left group-hover:text-white text-xl']"></i></button><button @click="next" :disabled="page === 3" :class="[page==3 ? 'mx-2  flex justify-center items-center duration-500 w-[50px] h-[50px]  border-2 border-gray-300 rounded-full':'mx-2  flex justify-center items-center duration-500 w-[50px] h-[50px] group hover:bg-gray-700 border-2 border-gray-700 rounded-full']"><i :class="[page==3 ?'fas fa-long-arrow-alt-right text-gray-400 text-xl':'fas fa-long-arrow-alt-right group-hover:text-white text-xl']"></i></button></div>
  </div>
</div>
            <div class="relative h-[400px] opacity-0 slidet w-[95%] overflow-hidden my-[100px] scroll-smooth p-4">
                <div class="slidetrack duration-500 translate-x-[-0px] absolute flex flex-row justify-center h-full">
      <div class="w-[400px] p-4 mx-3 h-[400px]">
         <div class="text-teal-700 my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500  text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>

                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
                <div class="text-teal-700 my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500  text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>

                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
        <div class="text-teal-700 my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] p-4 mx-3 h-[400px]">
        <div class="text-teal-700 my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500  text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
        <div class="text-teal-700  my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Introduction to Richard Francis, Chief Executive of Purespring TherapeuticsIntroduction from Quell Therapeutics, CEO, Iain McGill
11.0</a></div>
        <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
        <div class="text-teal-700 my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] p-4 mx-3 h-[400px]">
        <div class="text-teal-700  my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
      <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
                <div class="text-teal-700  my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>
              <div class="w-[400px] border-l-2 border-gray-300 p-4 mx-3 h-[400px]">
                <div class="text-teal-700  my-4">23.10.19 | VIDEO LENGTH 4:45</div>
        <div class="my-4 duration-500 hover:underline"><a href="#" class="duration-500 text-2xl font-bold">Syncona CEO Martin Murphy discusses Clade Series A financing 03.11.21</a></div>
                <div class="text-teal-500 my-4 flex flex-wrap flex-rows"><div class="bg-teal-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div><div class="bg-green-100 duration-500 mx-3 text-green-600 hover:bg-white">Fond bold gsgso</div></div>
        </div>

            </div> 
</div>
      <div class="flex justify-center my-4"><div class="w-[200px] duration-500 my-4 border-2 hover:bg-yellow-500 group flex flex-row justify-around items-center p-2 border-yellow-500 rounded-full text-yellow-500"><span class="text-xl mx-2 font-bold group-hover:text-white">View All News</span><span><i class="fa fa-arrow-right group-hover:text-white text-lg"></i></span></div></div>

</div>


<div class="bg-gray-700 w-full h-[500px] my-4 p-4">
  <div class="flex justify-center text-white opacity-0 slidet p-4 text-3xl"><div>RELATED CONTENT</div></div>
  <div class="flex flex-row justify-between p-4 h-[90%]">
   <div class="flex justify-center w-[50%] opacity-0 slidet text-white text-5xl items-center"><div><a class="hover:text-white hover:underline duration-500">Portfolio</a></div></div>
   <div class="flex justify-center w-[50%] opacity-0 slidet border-l border-gray-300 text-white text-5xl items-center duration-500"><div><a class="hover:text-white hover:underline duration-500">Investors</a></div></div>
  </div>
</div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
      return{
           img1:require('../assets/vd.jpg'),
           img2:require('../assets/s.jpg'),
           img3:require('../assets/ss.jpg'),
           img4:require('../assets/sss.jpg'),
           img5:require('../assets/ssss.jpg'),
           page:1,
           tra:0,
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
      next(){
       var x= document.querySelector(".slidetrack");
    x.classList.remove('translate-x-[-'+this.tra+'px]');
    this.tra +=1305
    this.page+=1
    console.log(this.tra)

   x.classList.add('translate-x-[-'+this.tra+'px]');
   console.log('translate-x-['+this.tra+'px]')
  },
  prev(){
       var x= document.querySelector(".slidetrack");
    x.classList.remove('translate-x-[-'+this.tra+'px]');
    this.tra -=1305
    this.page-=1
    console.log(this.tra)

   x.classList.add('translate-x-[-'+this.tra+'px]');
   console.log('translate-x-['+this.tra+'px]')
  },
  }
}
</script>

<style>

</style>