<template>
  <div>
           <div class="w-full text-white flex flex-row overflow-hidden h-[500px] bg-teal-700">
        <div class="w-[60%] h-full flex justify-center items-center"><div class="text-6xl sm:text-2xl">Our social impact</div></div>
        <div class="w-[50%] h-full relative">
          <svg class="absolute z-0 top-[130px] right-[80px]" width="100" height="200" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="white" stroke-width="1" fill="transparent" />
</svg>
<svg class="absolute bottom-[10px] z-0 right-[100px]" width="320" height="320" viewBox="-1 -1 240 300">
  <path d="M104,0 L208,60 L208,180 L104,240 L0,180 L0,60z" stroke="orange" stroke-width="2" fill="transparent" />
</svg>
        </div>
    </div>
<!--Pagecontent-->
<div class="flex flex-col">

<div class="p-4 w-full h-[650px] sm:h-auto">
  <div class="flex flex-row sm:flex-wrap h-full justify-between items-center p-4">
        <div class="sm:w-full xl:w-[47%] opacity-0 slidet">
          <img :src="img2" class="w-full h-full">
    </div>
    <div class="sm:w-full xl:w-[43%] h-[80%] flex flex-col justify-center items-center opacity-0 slidet">
      <div class="w-[85%] text-gray-700">
      <div class="text-3xl text-left font-bold my-4">Making a positive contribution</div>
      <div class="text-lg  text-left my-4">We are committed to managing our business in a sustainable way, investing responsibly, and supporting our portfolio companies in making positive contributions to society by developing treatments that will make a difference to the lives of patients and their families.</div>
      </div>
    </div>
  </div>
</div>

<div class="p-4 w-full flex justify-center">
    <div class="text-xl leading-8 xl:p-4 sm:p-2 w-[70%] sm:w-[95%]">
        <div class=" opacity-0 slidet">These companies support the UK life science sector, providing jobs, developing the next generation of industry practitioners, advancing the knowledge economy and in doing so strengthen the foundation for the success of our future businesses. Our charitable commitment allows us to support patients, their families and research institutions beyond our core activities.</div>

                <div class="flex flex-col  py-[100px] space-y-4">
            <div @click="toggle(po.id)"  v-for="po in post" :key="po.id" class="duration-500 opacity-0 slidet w-full border-t-2 border-gray-200 my-3">
                <button class=" w-full duration-500 text-gray-700 text-4xl sm:text-2xl flex flex-row justify-between py-4">
                  <a>{{po.name}}</a><span><i :class="[po.active?'fa fa-minus text-xl text-yellow-500 animate__animated animate__fadeIn animate__fast':'fa fa-plus text-xl text-yellow-500']"></i></span>
                  </button>
                <div :class="[po.active?'duration-500 animate__animated animate__fadeIn animate__fast':'duration-500 hidden']">{{po.title}}</div>
                 </div>

            
        </div>

    </div>
</div>

      
        <div class="bg-gray-700 w-full h-[500px] sm:h-auto mt-4 p-4">
  <div class="flex justify-center text-white font-bold p-4 text-2xl opacity-0 slidet"><div>KEY SUSTAINABILITY PILLARS</div></div>
  <div class="flex flex-row sm:flex-wrap justify-between sm:justify-center p-4 h-[80%]">
   <div class="flex flex-col justify-center w-[32%] sm:w-[60%] text-white text-3xl items-center opacity-0 slidet">
          <div class="w-[50%] h-[33%] flex justify-center relative">
              <span class="text-gray-700 font-bold absolute text-4xl top-[31%] left-[38%]">01</span>
              <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z" stroke="white" stroke-width="1" fill="white" /></svg>
  </div>
  <div class="w-[70%] text-center"><a class="hover:text-white hover:underline duration-500">Responsible investor and partner</a></div>
     </div>
 <div class="flex flex-col justify-center xl:border-l-2 border-gray-200 sm:border-t w-[32%] sm:w-[60%] text-white text-3xl opacity-0 slidet items-center">
          <div class="w-[50%] h-[33%] flex justify-center relative">
              <span class="text-gray-700 font-bold absolute text-4xl top-[31%] left-[38%]">02</span>
              <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z" stroke="white" stroke-width="1" fill="white" /></svg>
  </div>
  <div class="w-[70%] text-center"><a class="hover:text-white hover:underline duration-500">Inspiring and empowering our people</a></div>
     </div>
 <div class="flex flex-col justify-center xl:border-l-2 border-gray-200 sm:border-t w-[32%] sm:w-[60%] text-white text-3xl opacity-0 slidet items-center">
          <div class="w-[50%] h-[33%] flex justify-center relative">
              <span class="text-gray-700 font-bold absolute text-4xl top-[31%] left-[38%]">03</span>
              <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z" stroke="white" stroke-width="1" fill="white" /></svg>
  </div>
  <div class="w-[70%] text-center"><a class="hover:text-white hover:underline duration-500">Responsible and ethical business</a></div>
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
           img1:require('../assets/vd.jpg'),
           img2:require('../assets/s.jpg'),
           img3:require('../assets/ss.jpg'),
           img4:require('../assets/sss.jpg'),
           img5:require('../assets/ssss.jpg'),
           post:[
             {
               id:1,
               name:'Extending and enhancing human life',
               title:'Focusing on the development of transformational treatments for patients in areas of high unmet medical need means we tend to operate in selective areas of science where the potential for a dramatic impact is high, for example in intractable diseases with no treatment options.We are highly motivated by the potential impact of the treatments that our companies develop and believe that if we succeed in the development of these treatments, we will also see long-term value and benefits for all stakeholders.',
               active:false
             },
                          {
               id:2,
               name:'Building globally competitive businesses leveraging UK/European scientific research',
               title:'The UK has a globally significant scientific research base and historically has not developed globally competitive scaled biotech companies set up to take products to market and treatments to patients. Our model of taking a hands-on partnership approach, combined with deep, long-term and expert capital means that companies are being built here at scale with jobs from clinicians to product development specialists and manufacturing experts. The creation and development of these companies builds expertise and skills and is an important contributor to a vibrant biotech industry in the UK.',
               active:false
             },
                          {
               id:3,
               name:'Supporting the UK Life Science Industry',
               title:'We believe we have a broad role to play in supporting the growth of the life science industry in the UK. We found, fund and build our portfolio companies to become standalone entities that create jobs, train employees, and share knowledge with others in the sector.',
               active:false
             },
                                       {
               id:4,
               name:'The Syncona Foundation: Charitable giving in our DNA',
               title:'The Syncona Foundation was set up in 2012 with charitable objectives focusing on the prevention, treatment, cure and ultimately eradication of cancer and other diseases, as well as other charitable activities.Each year, Syncona provides a significant level of philanthropic funding to the two charities it supports, The Syncona Foundation and The Institute of Cancer Research (ICR), charities which have ambitions aligned to our vision to deliver transformational treatments for patients and through which we believe we contribute to the wider healthcare ecosystem.Read more about the Syncona Foundation here.',
               active:false
             },
           ]
    }
},
      mounted(){
   window.addEventListener('scroll', this.onLoaded);
  },
 methods:{
           toggle(v){

                    var i;
  for (i = 0; i < this.post.length; i++) {

      if(this.post[i].id == v){
     this.post[i].active= !this.post[i].active
      }
      else{
         this.post[i].active=false 
      }
  }
 
        },
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