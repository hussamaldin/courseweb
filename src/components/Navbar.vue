<template>
<div :class="[nav?'bg-white absolute w-full h-screen duration-500 opacity-100 z-50':'bg-white absolute w-full h-screen opacity-0 duration-500']">
    <button class="absolute top-[50px] right-[50px] flex justify-center items-center group w-[30px] text-white h-[30px]"><span @click="change()" class="group-hover:text-yellow-500 text-4xl">x</span></button>
    <div class="w-full h-[50%] bg-gray-700 flex justify-center items-center">
        <div class="w-[50%]">
            <div class="w-full h-[47px] rounded-full relative">
                <input type="text" class="absolute pl-3 font-bold border-none outline-none w-full h-full rounded-full">
                <button class="h-full w-[20px] absolute  right-[25px]"><i class="fa fa-search  text-2xl hover:text-yellow-500 text-gray-700"></i></button>
            </div>
        </div>

    </div>
</div>
  <div :class="[open? 'w-full h-[100px] flex flex-row justify-between absolute text-gray-700 top-2 z-40':' flex flex-row w-full h-[100px] absolute text-white top-2 justify-between z-40']">
                <div class="w-[10%] flex justify-center items-center mx-3 p-2"><svg class="w-[140px] h-[150px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 219 48"><defs><linearGradient x1="93.403%" y1="63.516%" x2="41.898%" y2="31.17%" id="e"><stop offset="0%"></stop><stop stop-color="#0B0B0B" offset="1.435%"></stop><stop stop-color="#3D3D3D" offset="8.986%"></stop><stop stop-color="#6B6B6B" offset="17.08%"></stop><stop stop-color="#939393" offset="25.54%"></stop><stop stop-color="#B5B5B5" offset="34.44%"></stop><stop stop-color="#D0D0D0" offset="43.91%"></stop><stop stop-color="#E5E5E5" offset="54.17%"></stop><stop stop-color="#F4F4F4" offset="65.58%"></stop><stop stop-color="#FCFCFC" offset="79.09%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient><linearGradient x1="6.242%" y1="35.704%" x2="60.989%" y2="71.828%" id="f"><stop offset="0%"></stop><stop stop-color="#0B0B0B" offset="1.435%"></stop><stop stop-color="#3D3D3D" offset="8.986%"></stop><stop stop-color="#6B6B6B" offset="17.08%"></stop><stop stop-color="#939393" offset="25.54%"></stop><stop stop-color="#B5B5B5" offset="34.44%"></stop><stop stop-color="#D0D0D0" offset="43.91%"></stop><stop stop-color="#E5E5E5" offset="54.17%"></stop><stop stop-color="#F4F4F4" offset="65.58%"></stop><stop stop-color="#FCFCFC" offset="79.09%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient><linearGradient x1="50.156%" y1="99.444%" x2="50.156%" y2="25.777%" id="g"><stop offset="0%"></stop><stop stop-color="#0B0B0B" offset="1.435%"></stop><stop stop-color="#3D3D3D" offset="8.986%"></stop><stop stop-color="#6B6B6B" offset="17.08%"></stop><stop stop-color="#939393" offset="25.54%"></stop><stop stop-color="#B5B5B5" offset="34.44%"></stop><stop stop-color="#D0D0D0" offset="43.91%"></stop><stop stop-color="#E5E5E5" offset="54.17%"></stop><stop stop-color="#F4F4F4" offset="65.58%"></stop><stop stop-color="#FCFCFC" offset="79.09%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient><linearGradient x1="84.698%" y1="43.222%" x2="32.685%" y2="57.337%" id="h"><stop offset="0%"></stop><stop stop-color="#020202" offset=".348%"></stop><stop stop-color="#373737" offset="8.472%"></stop><stop stop-color="#666" offset="16.95%"></stop><stop stop-color="#8F8F8F" offset="25.93%"></stop><stop stop-color="#B2B2B2" offset="35.3%"></stop><stop stop-color="#CECECE" offset="45.18%"></stop><stop stop-color="#E4E4E4" offset="55.76%"></stop><stop stop-color="#F3F3F3" offset="67.34%"></stop><stop stop-color="#FCFCFC" offset="80.72%"></stop><stop stop-color="#FFF" offset="98.312%"></stop></linearGradient><linearGradient x1="15.557%" y1="55.806%" x2="73.964%" y2="43.092%" id="i"><stop offset="0%"></stop><stop stop-color="#0B0B0B" offset="1.435%"></stop><stop stop-color="#3D3D3D" offset="8.986%"></stop><stop stop-color="#6B6B6B" offset="17.08%"></stop><stop stop-color="#939393" offset="25.54%"></stop><stop stop-color="#B5B5B5" offset="34.44%"></stop><stop stop-color="#D0D0D0" offset="43.91%"></stop><stop stop-color="#E5E5E5" offset="54.17%"></stop><stop stop-color="#F4F4F4" offset="65.58%"></stop><stop stop-color="#FCFCFC" offset="79.09%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient><linearGradient x1="49.675%" y1=".084%" x2="49.675%" y2="52.532%" id="j"><stop offset="0%"></stop><stop stop-color="#0B0B0B" offset="1.435%"></stop><stop stop-color="#3D3D3D" offset="8.986%"></stop><stop stop-color="#6B6B6B" offset="17.08%"></stop><stop stop-color="#939393" offset="25.54%"></stop><stop stop-color="#B5B5B5" offset="34.44%"></stop><stop stop-color="#D0D0D0" offset="43.91%"></stop><stop stop-color="#E5E5E5" offset="54.17%"></stop><stop stop-color="#F4F4F4" offset="65.58%"></stop><stop stop-color="#FCFCFC" offset="79.09%"></stop><stop stop-color="#FFF" offset="100%"></stop></linearGradient><path id="a" d="M.014.273h22.14v22.233H.015z"></path><path id="c" d="M0 .29h22.27v34.443H0z"></path></defs><g fill="none" fill-rule="evenodd"><path d="M118.082 27.708c0 3.239-.393 4.71 3.478 4.955v.977c-1.784-.05-3.623-.142-5.411-.196-1.928.054-3.81.145-5.73.196v-.977c3.712-.245 3.455-1.422 3.455-4.662v-6.288c0-3.39.14-8.197-4.56-8.197-3.858 0-6.331 2.992-6.331 6.58v7.612c0 3.239-.452 4.71 3.47 4.955v.977c-1.788-.05-3.622-.142-5.392-.196-1.938.054-3.82.145-5.757.196v-.977c3.718-.245 3.464-1.422 3.464-4.662v-6.046c0-1.369 0-4.81-.247-5.936-.39-1.763-1.731-1.571-3.303-1.571v-.98c2.572-.3 4.399-1.079 6.828-1.519l.627 4.458h.106c1.737-3.034 4.404-4.458 7.93-4.458 4.7 0 7.373 2.103 7.373 6.77v8.989zM140.848 30.405c-2.074 2.549-5.495 3.777-8.714 3.777-6.137 0-10.648-4.321-10.648-10.404 0-6.876 5.253-11.829 12.134-11.829 1.93 0 6.44.586 6.44 3.282 0 .888-.747 1.82-1.643 1.82-1.177 0-1.828-.977-2.16-1.912-.598-1.48-.998-1.867-2.833-1.867-5.346 0-6.976 5.396-6.976 9.724 0 4.712 1.536 9.617 7.125 9.617 2.478 0 4.652-1.28 6.238-3.102l1.037.894zM147.432 22.996c0 4.657 1.385 10.06 7.183 10.06 5.395 0 6.724-5.403 6.724-9.77 0-4.71-1.33-10.212-7.173-10.212-5.395 0-6.734 5.645-6.734 9.922m18.871 0c0 6.617-5.45 11.185-11.936 11.185-6.44 0-11.87-4.905-11.87-11.384 0-6.289 5.828-10.848 11.87-10.848 6.145 0 11.936 4.706 11.936 11.047M190.159 27.708c0 3.239-.393 4.71 3.451 4.955v.977c-1.765-.05-3.61-.142-5.383-.196-1.928.054-3.806.145-5.748.196v-.977c3.72-.245 3.47-1.422 3.47-4.662v-6.288c0-3.39.14-8.197-4.565-8.197-3.86 0-6.328 2.992-6.328 6.58v7.612c0 3.239-.445 4.71 3.47 4.955v.977c-1.784-.05-3.624-.142-5.4-.196-1.93.054-3.809.145-5.74.196v-.977c3.707-.245 3.465-1.422 3.465-4.662v-6.046c0-1.369 0-4.81-.25-5.936-.396-1.763-1.746-1.571-3.32-1.571v-.98c2.574-.3 4.412-1.079 6.839-1.519l.64 4.458h.099c1.737-3.034 4.416-4.458 7.923-4.458 4.7 0 7.377 2.103 7.377 6.77v8.989z" fill="currentColor"></path><g transform="translate(195.236 11.676)"><path d="M13.233 9.744c-2.96 1.423-8.6 3.34-8.6 7.266 0 1.818 1.12 3.53 3.165 3.53 1.932 0 4.051-1.477 5.435-2.798V9.744zm-.443-1.227c.501-.246.398-.883.398-1.423 0-3.344-.287-5.696-4.357-5.696-2.488 0-4.502.199-4.648 2.8-.103 1.085-.747 2.161-1.972 2.161C1.11 6.36.32 5.675.32 4.587.319.952 6.904.273 9.422.273c5.501 0 8.028 1.425 8.028 7.071v8.094c0 1.222-.204 4.853 1.734 4.853.991 0 1.483-.877 2.022-1.562l.949.49c-.783 1.61-2.639 3.287-4.455 3.287-2.043 0-3.767-1.518-4.257-3.48-2.336 1.86-5.203 3.48-8.28 3.48-2.614 0-5.149-1.569-5.149-4.321 0-4.126 4.708-5.895 7.886-7.311l4.89-2.357z" fill="currentColor"></path></g><g transform="translate(71.367 12.1)"><path d="M3.66 5.047c-.347-.832-.833-2.06-1.428-2.747C1.776 1.81.594 1.274 0 1.274V.29C1.674.334 3.36.436 5.037.48 6.925.436 8.765.334 10.64.29v.984c-.682.245-3.025.143-3.025 1.714 0 1.281 1.49 4.559 2.027 5.887l3.181 7.516 3.707-8.844c.492-1.17 1.389-3.278 1.389-4.56 0-1.373-1.681-1.668-2.72-1.713V.29c1.29.044 2.503.146 3.816.19 1.08-.044 2.177-.146 3.255-.19v.984c-2.078.045-2.128 1.464-2.912 3.135l-.645 1.432L8.408 29.399c-.639 1.52-2.072 5.302-4.16 5.302-.89.19-1.486-.496-1.486-1.188 0-2.252 2.775-2.102 3.756-3.628.803-1.17 1.66-3.136 2.247-4.514L10.64 21.2 3.66 5.047z" fill="currentColor"></path></g><path d="M50.596 23.72h1.118c1.01 4.966 3.673 9.134 9.365 9.134 3.861 0 7.09-2.153 7.09-6.127 0-4.481-3.922-6.235-7.534-7.658-4.497-1.719-9.314-4.077-9.314-9.68 0-5.587 4.414-8.832 9.806-8.832 2.732 0 5.252.937 7.488 2.505l1.126-1.915h.548l.253 8.492H69.4c-1.127-4.073-3.46-7.756-8.273-7.756-3.161 0-5.784 2.011-5.784 5.205 0 3.87 3.513 5.201 6.569 6.477 5.17 2.116 10.912 4.664 10.912 11.093 0 6.432-6.052 9.523-11.833 9.523-3.373 0-6.006-.986-8.677-2.94l-1.19 2.058h-.528v-9.58z" fill="currentColor"></path><g fill-rule="nonzero"><path d="M19.255 2.947l3.772 6.413 4.255 7.28 3.772-6.37s.79-1.3.877-2.686c.088-1.17-.263-1.95-.395-2.254l-1.71-2.947C28.992.953 27.457.087 25.746.087H15.044c.439 0 1.36.13 2.325.736 1.14.78 1.886 2.124 1.886 2.124zM18.246 30.335l-3.728-6.414-4.254-7.28-3.773 6.283s-.833 1.3-.92 2.687c-.088 1.56.613 2.557.613 2.557l1.58 2.687c.833 1.43 2.368 2.297 4.079 2.297h10.526c-.395 0-1.272-.13-2.193-.737-1.184-.694-1.93-2.08-1.93-2.08z" fill="#EB5D0B"></path><path d="M36.756 14.344l-5.264-8.97c.176.303.483 1.083.395 2.253-.088 1.387-.877 2.687-.877 2.687l-3.772 6.37-4.255 7.28h7.5s1.58.044 2.808-.563c1.008-.52 1.535-1.17 1.754-1.56l.132-.217 1.535-2.6c.877-1.517.877-3.25.044-4.68z" fill="#626F72"></path><path d="M33.334 23.358c-1.228.606-2.807.563-2.807.563H14.518l3.728 6.414s.746 1.386 1.93 2.123c.965.607 1.798.737 2.193.737h3.377a4.778 4.778 0 004.08-2.297l5.307-9.057a5.585 5.585 0 01-1.799 1.517z" fill="#CB1520"></path><path d="M5.57 25.611c.088-1.387.921-2.687.921-2.687l3.773-6.283 4.254-7.28H7.062s-1.58-.044-2.807.563a4.732 4.732 0 00-1.799 1.603L.833 14.344a4.612 4.612 0 000 4.637l5.395 9.23c-.044 0-.745-1.04-.658-2.6z" fill="#626F72"></path><path d="M4.21 9.924c1.229-.607 2.808-.564 2.808-.564H22.984L19.21 2.947s-.745-1.387-1.93-2.124c-.965-.606-1.886-.736-2.324-.736H11.71c-1.667 0-3.246.866-4.08 2.296l-5.35 9.144c.35-.346.92-1.083 1.93-1.603z" fill="#CB1520"></path><path d="M19.255 2.947l3.772 6.413 4.255 7.28 3.772-6.37s.79-1.3.877-2.686c.088-1.17-.263-1.95-.395-2.254l-1.71-2.947C28.992.953 27.457.087 25.746.087H15.044c.439 0 1.36.13 2.325.736 1.14.78 1.886 2.124 1.886 2.124z" fill="url(#e)" opacity=".4" style="mix-blend-mode:multiply"></path><path d="M18.246 30.335l-3.728-6.414-4.254-7.28-3.773 6.283s-.833 1.3-.92 2.687c-.088 1.56.613 2.557.613 2.557l1.58 2.687c.833 1.43 2.368 2.297 4.079 2.297h10.526c-.395 0-1.272-.13-2.193-.737-1.184-.694-1.93-2.08-1.93-2.08z" fill="url(#f)" opacity=".4" style="mix-blend-mode:multiply"></path><path d="M36.756 14.344l-5.264-8.97c.176.303.483 1.083.395 2.253-.088 1.387-.877 2.687-.877 2.687l-3.772 6.37-4.255 7.28h7.5s1.58.044 2.808-.563c1.008-.52 1.535-1.17 1.754-1.56l.132-.217 1.535-2.6c.877-1.517.877-3.25.044-4.68z" fill="url(#g)" opacity=".4" style="mix-blend-mode:multiply"></path><path d="M4.21 9.924c1.229-.607 2.808-.564 2.808-.564H22.984L19.21 2.947s-.745-1.387-1.93-2.124c-.965-.606-1.886-.736-2.324-.736H11.71c-1.667 0-3.246.866-4.08 2.296l-5.35 9.144c.35-.346.92-1.083 1.93-1.603z" fill="url(#h)" opacity=".4" style="mix-blend-mode:multiply"></path><path d="M33.334 23.358c-1.228.606-2.807.563-2.807.563H14.518l3.728 6.414s.746 1.386 1.93 2.123c.965.607 1.798.737 2.193.737h3.377a4.778 4.778 0 004.08-2.297l5.307-9.057a5.585 5.585 0 01-1.799 1.517z" fill="url(#i)" opacity=".4" style="mix-blend-mode:multiply"></path><path d="M5.57 25.611c.088-1.387.921-2.687.921-2.687l3.773-6.283 4.254-7.28H7.062s-1.58-.044-2.807.563a4.732 4.732 0 00-1.799 1.603L.833 14.344a4.612 4.612 0 000 4.637l5.395 9.23c-.044 0-.745-1.04-.658-2.6z" fill="url(#j)" opacity=".4" style="mix-blend-mode:multiply"></path></g></g></svg></div>
      <div class="xl:flex xl:flex-row xl:h-full xl:items-center xl:justify-center hidden xl:w-[88%]">

          <div class="xl:flex xl:flex-row xl:text-lg">
              <div class="mx-2 p-2 group relative">
                  <a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="/about">About us <i :class="[open?'fa fa-angle-down text-gray-700 text-sm':'fa fa-angle-down text-white text-sm']"></i></a><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full">
                  <div class="bg-white group-hover:block hidden duration-500 absolute top-[47px] left-[-20px] p-3 flex flex-col w-[300px] h-[230px]">
                      <ul>
                          <li class="pt-1"><a href="/whowe" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Who we are</a></li>
                          <li class="pt-1"><a href="/ourpeople" class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our Model</a></li>
                          <li class="pt-1"><a href="/syncona" class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/culture" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our purpose,cluture and values</a></li>
                          <li class="pt-1"><a href="/kps" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our Histor</a></li>
                      </ul>

                  </div>
              </div>
              <div class="mx-2 p-2 group relative">
                  <a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="/ourpeople">Our People</a> <i :class="[open?'fa fa-angle-down text-gray-700 text-sm':'fa fa-angle-down text-white text-sm']"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full">
                                    <div class="bg-white group-hover:block hidden duration-500 absolute top-[47px] left-[-20px] p-3 flex flex-col w-[300px] h-[50px]">
                      <ul>
                          <li class="pt-1"><a href="/whowe" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Who we are</a></li>
                      </ul>

                  </div>
                  </div>
              <div class="mx-2 p-2 group relative">
                  <a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="/portofilio">Portfolio</a> <i :class="[open?'fa fa-angle-down text-gray-700 text-sm':'fa fa-angle-down text-white text-sm']"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full">
                                    <div class="bg-white group-hover:block hidden duration-500 absolute top-[47px] left-[-20px] p-3 flex flex-col w-[345px] h-[300px]">
                      <ul>
                          <li class="pt-1"><a href="/datadriven" class="text-gray-600 cursor-pointer hover:text-gray-700 duration-500 hover:underline">Message from chief excuted Ei</a></li>
                          <li class="pt-1"><a href="inspiring" class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">Inspiring and empowring our people</a></li>
                          <li class="pt-1"><a href="/syncona" class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/culture" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our purpose,cluture and values</a></li>
                          <li class="pt-1"><a href="/aligin" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Aligining</a></li>
                           <li class="pt-1"><a class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Responsible and ethical busniess</a></li>
                           <li class="pt-1"><a href="social" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our Social Impact</a></li>
                      </ul>

                  </div>
              
              </div>
              <div class="mx-2 p-2 group"><a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="/inspiring">Sustainabilit</a><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></div>
              <div class="mx-2 p-2 group"><a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="investment">News and Insights</a><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></div>
              <div class="mx-2 p-2 group relative">
                  <a :class="[open?'hover:text-gray-700 text-gray-700':'hover:text-white']" href="/investor">Investors </a> <i :class="[open?'fa fa-angle-down text-gray-700 text-sm':'fa fa-angle-down text-white text-sm']"></i><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full">
                                    <div class="bg-white group-hover:block hidden duration-500 absolute top-[47px] left-[-20px] p-3 flex flex-col w-[300px] h-[260px]">
                      <ul>
                          <li class="pt-1"><a href="/investment" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Investment Case</a></li>
                          <li class="pt-1"><a href="/finantial" class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">Financial Calendear</a></li>
                          <li class="pt-1"><a class="text-gray-700 cursor-pointer hover:text-gray-700 duration-500 hover:underline">The Syncona Platform</a></li>
                          <li class="pt-1"><a href="/datadriven" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Data Driven Investment process</a></li>
                          <li class="pt-1"><a href="/kps" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Kps</a></li>
                          <li class="pt-1"><a href="/analys" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Analysts and adviser</a></li>
                          <li class="pt-1"><a href="/social" class="text-gray-700  cursor-pointer hover:text-gray-700 duration-500 hover:underline">Our Histor</a></li>
                      </ul>

                  </div>
                  </div>
              <div class="mx-2 p-2 group"><a :class="[open?'hover:gray-700 text-gray-700':'hover:text-white']" href="/contact">Contact</a><hr class="w-0 duration-500 group-hover:w-full"><hr class="w-0 duration-500 group-hover:w-full"></div>
          </div>

      </div>
      <div class="w-[12%] flex items-center justify-center">
                <div  @click="change()" class="mx-4 p-2"><span><i class="fas fa-search"></i></span></div>
          <div  @click="change1()" class="xl:mx-4 block xl:hidden  xl:p-2"><span><i class="fa fa-bars"></i></span></div>
      </div>

  </div>
</template>

<script>
export default {
data(){
    return{
        
    }
},
computed:{
    open(){
        return this.$store.state.open
    },
        nav(){
        return this.$store.state.nav
    }
},
mounted(){

},
methods:{
    change(){
        this.$store.commit('change')
    },
        change1(){
        this.$store.commit('change1')
    }
}

}
</script>

<style>

</style>