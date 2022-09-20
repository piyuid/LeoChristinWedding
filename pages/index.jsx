/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Script from "next/script"
import FlipCountdown from '@rumess/react-flip-countdown';
import Pickerbcaleo from "../components/Pickerbcaleo";
import Pickerbcachristin from "../components/Pickerbcachristin";
import Pickerbnichristin from "../components/Pickerbnichristin";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative lg:fixed lg:w-7/12 min-h-screen sm:w-full inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/leochristin1.jpg)` }}>

        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
        </div>
        <h1 className="absolute lg:bottom-0 lg:left-0 p-20 text-center text-white text-6xl md:text-8xl font-Greatvibes drop-shadow-md">Leo &<br /> Christin</h1>
        <div className="container">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DPS707L2XX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DPS707L2XX');
            `}
          </Script>
        </div>
      </div>

      {/* Top Home */}
      <div className="w-full lg:w-5/12 ml-auto">
        <div className="h-screen flex flex-col items-center p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/leochristin2.jpg)` }}>
          <h1 className="text-4xl mb-12 font-Alice">You are Invited !</h1>
          <h2 className="text-2xl mb-12 font-Alice">The Wedding of</h2>
          <h1 className="text-4xl md:text-6xl mb-52 font-Greatvibes drop-shadow-md">Leo & Christin</h1>
          <h1 className="text-4xl mb-5 font-Alice drop-shadow-md" id="test">Pak/Bu Yth.</h1>
        </div>

        {/* Ayat Firman Tuhan */}
        <div className="bg-red-200 flex items-center flex-col p-10">
          <img src="../images/cross.svg" className="md:w-80 sm:w-auto h-auto" alt="Scroll" />
          <p className="text-lg text-center mb-5 text-green-800 italic font-Alice">Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan TUHAN, tidak boleh diceraikan manusia.</p>
          <p className="text-xl text-center text-green-800 italic underline decoration-2 font-Alice">Matius 19:5-6</p>
        </div>

        {/* Pengantin */}
        <div className="min-h-screen flex items-center flex-col p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/bgstory.png)` }} id="pengantin">
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800">Pengantin</h1>
          <p className="md:mx-24 text-green-800 text-center font-Alice">Atas Izin Tuhan Yesus Kristus, Inilah Putra dan Putri kami untuk diberkati kepada Tuhan Yesus Kristus.</p>
          <img src="../images/leo.png" className="w-64 h-auto" alt="Scroll" />
          <p className="text-5xl md:text-6xl text-green-800 text-center font-Tangerine">Leo Puji Christyanto Simbolon</p>
          <p className="sm:text-lg text-green-800 text-center mb-1 font-Alice">Putra Pertama dari Bapak Tambun Simbolon (†) dan Ibu Sri Sulistyowati Sinaga</p>
          <a href="https://www.instagram.com/piyuid/" target="_blank" rel="noreferrer">
            <img src="../images/instagram.png" className="mb-8 w-8 h-auto" alt="Scroll" />
          </a>
          <img src="../images/christin.png" className="w-64 h-auto" alt="Scroll" />
          <p className="text-5xl md:text-6xl text-green-800 text-center font-Tangerine">Christin Putri Daly</p>
          <p className="sm:text-lg text-green-800 text-center mb-1 font-Alice">Putri Kedua dari Bapak Sudiyarto (†) dan Ibu Martje Daly</p>
          <a href="https://www.instagram.com/christineputridaly/" target="_blank" rel="noreferrer">
            <img src="../images/instagram.png" className="mb-8 w-8 h-auto" alt="Scroll" />
          </a>
        </div>

        {/* Menghitung Tanggal */}
        <div className="min-h-max flex items-center flex-col p-10 bg-red-400">
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800">Menghitung Waktu</h1>
          <FlipCountdown
            hideYear
            hideMonth
            size='medium'
            theme='light'
            dayTitle='Hari'
            hourTitle='Jam'
            minuteTitle='Menit'
            secondTitle='Detik'
            endAt={'2022-10-01 13:00:00'}
            />
        </div>

        {/* Tanggal */}
        <div className="min-h-max flex items-center flex-col p-10" style={{ backgroundImage: `url(../images/bgdate.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800">Diselenggarakan</h1>
          <p className="mb-5 mx-10 text-green-800 text-center font-Alice">Kasih diantara kami begitu indah, tetapi dipersatukan untuk lebih mengasihi TUHAN itulah yang terindah, mengundang kehadiran Bapak/Ibu/Saudara(i) untuk berbagi kebahagiaan atas bersatunya kasih indah kami :</p>
          <h2 className="text-green-800 text-center text-4xl font-Oscript">Sabtu</h2>
          <h2 className="mb-1 text-green-800 text-center text-4xl font-Oscript">01 Oktober 2022</h2>
          <a href="https://bit.ly/3RRyQtw" target="_blank" rel="noreferrer" className="mb-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Simpan Tanggal di Kalender
          </a>

          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800" id="pemberkatan">Pemberkatan</h1>
          <h3 className="text-green-800 text-center text-2xl font-Oscript">Bertempat</h3>
          <h2 className="text-green-800 text-center font-Alice">Gereja GPIB Filadelfia Bintaro</h2>
          <h3 className="mx-10 text-green-800 text-center font-Alice">Jl. Camar XIII No.5, Bintaro, Pondok Aren, South Tangerang City, Banten 15221</h3>

          <a href="https://bit.ly/3RSRT6S" target="_blank" rel="noreferrer" className="mb-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            Google Maps
          </a>

          <h3 className="text-green-800 text-center text-2xl font-Oscript">Jam</h3>
          <h3 className="text-green-800 text-center text-2xl font-Oscript">13.00 - 15.00 WIB</h3>
          <iframe className="mb-10 w-auto" src="https://www.youtube.com/embed/gDi7zcQsDuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800" id="resepsi">Resepsi</h1>
          <h3 className="text-green-800 text-center text-2xl font-Oscript">Berlokasi</h3>
          <h2 className="text-green-800 text-center font-Alice">Griya CIMB Niaga 2 - Lt. 2 Foodbank</h2>
          <h3 className="mx-10 text-green-800 text-center font-Alice">Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, South Tangerang City, Banten 15224</h3>

          <a href="https://bit.ly/3QEYws9" target="_blank" rel="noreferrer" className="mb-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            Google Maps
          </a>

          <h3 className="text-green-800 text-center text-2xl font-Oscript">Jam</h3>
          <h3 className="text-green-800 text-center text-2xl font-Oscript">18.00 - 21.00 WIB</h3>

        </div>

        {/* Our Story */}
        <div className="min-h-max flex items-center flex-col p-10 bg-cover bg-center" style={{ backgroundImage: `url(../images/bgstory.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800">Our Story</h1>
          <div className="">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pb-8 ">
                <p className="mb-2 text-green-800 text-4xl font-Oscript">2012</p>
                <p className="text-green-800 font-Alice">
                  Kita saling mengenal di satu kuliah yang sama di STMIK Jakarta, Leo S1 Sistem Informasi dan Christin ambil D3 Manajemen Informasi, sama-sama mengambil jurusan komputer, karena sering bertemu, akhir nya kami bisa saling mengenal dan berteman pada kala itu.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pb-8 ">
                <p className="mb-2 text-green-800 text-4xl font-Oscript">2015</p>
                <p className="text-green-800 font-Alice">
                  Penuh lika liku yang terjadi, sampai akhir nya kami memutuskan untuk menjadi teman dekat.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pb-8 ">
                <p className="mb-2 text-green-800 text-4xl font-Oscript">2019-2021</p>
                <p className="text-green-800 font-Alice">
                  Tahun perjuangan, Tahun yang berat, Tahun yang berarti sekali buat kami berdua. Tangisan, Duka, Kesulitan dan lain-lain. Kami benar-benar ditempa di Tahun kala itu. Tapi TUHAN, buka kan semua. disembuhkan, diteguhkan, dan dikasihi oleh TUHAN kepada Kami berdua.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-green-800 text-4xl font-Oscript">2022</p>
                <p className="text-green-800 font-Alice">
                  Banyak perjuangan dilalui, dari di campakan dan di tolak, tapi TUHAN tetap menyatukan kita dengan komitmen dan doa kita. Yang keras hati di luluhkan. Akhirnya kami memasuki ke jenjang serius, bulan April Lalu kami ber Tunangan dan 1 Oktober nanti kami Diberkati olehNYA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-max flex items-center flex-col p-10" style={{ backgroundImage: `url(../images/bggallery.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-white drop-shadow-lg sm:text-green-800 sm:drop-shadow-none">Gallery</h1>
          <div className="container items-center">
            <div className="grid overflow-hidden grid-cols-4 grid-rows-12 gap-2">
              <div className="w-full row-span-2 col-span-2">
                <img
                  src="../images/g-1.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              
              <div className="w-full row-span-2 col-span-2">
                <img
                  src="../images/g-2.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              <div className="w-full row-span-2 col-span-4">
                <img
                  src="../images/g-3.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
            
              <div className="w-full row-span-2 col-span-2">
                <img
                  src="../images/g-4.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              <div className="w-full row-span-4 col-span-2">
                <img
                  src="../images/g-5.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              <div className="w-full row-span-2 col-span-2">
                <img
                  src="../images/g-6.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              <div className="w-full col-span-4">
                <img
                  src="../images/g-7.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
              <div className="w-full col-span-4">
                <img
                  src="../images/g-8.jpg"
                  alt="Leo and Christin Gallery"
                  className="inset-0 h-full w-full object-cover object-center rounded opacity-90 hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Kirim Hadiah */}
        <div className="min-h-max flex items-center flex-col p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/bggift.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800" id="saweran">Kirim Hadiah</h1>
          <h2 className="text-green-800 text-center text-2xl font-Alice font-bold">VIA QRIS</h2>
          <img src="../images/qris.jpg" className="w-3/4 h-auto" alt="Scroll" />
          <h2 className="text-green-800 text-center text-2xl font-Alice font-bold">VIA Banking</h2>
          <Pickerbcaleo />
          <Pickerbcachristin />
          <Pickerbnichristin />
          
        </div>

        {/* RSVP Tamu Undangan */}
        <div className="min-h-max items-center p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/bgrsvp.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-center text-green-800" id="rsvpdong">Kirim Ucapan</h1>
          <div id="disqus_thread"></div>
          <Script>
            {`
              /**
              *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
              *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
              /*
              var disqus_config = function () {
              this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
              };
              */
              (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://leochristin-wedding.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();
            `}
          </Script>
          <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>


        {/* Protokol Kesehatan */}
        <div className="min-h-max items-center p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/bgprokes.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-center text-green-800">Protokol Kesehatan</h1>
          <img src="../images/prokes.png" alt="Scroll" />
                  
        </div>

        {/* Footer */}
        <div className="min-h-max flex items-center flex-col p-10" style={{ backgroundImage: `url(../images/bgfooter.png)` }}>
          <h1 className="text-4xl md:text-6xl mb-5 font-Satisfy text-green-800">Terima Kasih !</h1>
          <h1 className="text-xl md:text-2xl mb-5 font-Alice text-green-800">Development By</h1>
          <h1 className="text-xl md:text-2xl mb-5 font-Alice text-green-800">Leo & Christin - 2022</h1>
        </div>

      </div>

      {/* Navbar bottom */}
      <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-red-400 shadow drop-shadow-lg rounded-t-lg">
        <div id="tabs" className="flex justify-between">
          <a href="#pengantin" className="w-full focus:text-green-500 hover:text-green-500 justify-center inline-block text-center pt-2 pb-1">

            {/* Nav - Home */}
            <img src="../images/home.svg" width="25" height="25" className="inline-block mb-1" alt="Scroll" />
            <span className="tab tab-home block text-xs">Pengantin</span>
          </a>
          
          {/* Nav - Category */}
          <a href="#pemberkatan" className="w-full focus:text-green-500 hover:text-green-500 justify-center inline-block text-center pt-2 pb-1">
            
            <img src="../images/church.svg" width="25" height="25" className="inline-block mb-1" alt="Scroll" />
            <span className="tab tab-kategori block text-xs">Pemberkatan</span>
          </a>
          
          {/* Nav - Explore */}
          <a href="#resepsi" className="w-full focus:text-green-500 hover:text-green-500 justify-center inline-block text-center pt-2 pb-1">

            <img src="../images/location.svg" width="25" height="25" className="inline-block mb-1" alt="Scroll" />
            <span className="tab tab-explore block text-xs">Resepsi</span>
          </a>
          
          {/* Nav - Wishlist */}
          <a href="#saweran" className="w-full focus:text-green-800 hover:text-green-800 justify-center inline-block text-center pt-2 pb-1">
            
            <img src="../images/donation.svg" width="25" height="25" className="inline-block mb-1" alt="Scroll" />
            <span className="tab tab-whishlist block text-xs">Saweran</span>
          </a>
          
          {/* Nav - Account */}
          <a href="#rsvpdong" className="w-full focus:text-green-800 hover:text-green-800 justify-center inline-block text-center pt-2 pb-1">
            
            <img src="../images/rsvp.svg" width="25" height="25" fill="text-green-800" className="inline-block mb-1" alt="Scroll" />
            <span className="tab tab-account block text-xs">Rsvp</span>
          </a>
        </div>
      </section>
      
      </div>
  )
}