/* eslint-disable @next/next/no-img-element */
import Script from "next/script"

export default function Home() {
  return (
    <div className="relative">
      <div className="relative lg:fixed w-full lg:w-7/12 min-h-screen inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/leochristin1.jpg)` }}>
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
        <h1 className="absolute bottom-0 left-0 lg:p-20  text-white text-8xl font-Greatvibes drop-shadow-xl">Leo &<br />Christin</h1>
      </div>
      <div className="w-full lg:w-5/12 ml-auto">
        <div className="h-screen flex flex-col items-center p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(../images/leochristin2.jpg)` }}>
          <h1 className="text-4xl mb-12 font-Alice">You are Invited !</h1>
          <h2 className="text-2xl mb-12 font-Alice">The Wedding of</h2>
          <h1 className="md:text-6xl sm:text-4xl mb-52 font-Greatvibes">Leo & Christin</h1>
          <h1 className="text-4xl mb-5 font-Alice drop-shadow-xl test" id="test">Nama Tamu</h1>
        </div>
        <div className="bg-red-200 flex items-center flex-col p-10">
          <img src="../images/cross.svg" className="w-80 h-auto" alt="Scroll" />
          <p className="text-lg text-center mb-5 text-green-800 italic">Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan TUHAN, tidak boleh diceraikan manusia.</p>
          <p className="text-xl text-center text-green-800 italic underline decoration-2">Matius 19:5-6</p>
        </div>
        <div className="bg-red-100 min-h-screen flex items-center flex-col p-10">
          <h2 className="text-4xl mb-5 font-Satisfy text-green-800">Pengantin</h2>
          <p className="mb-5 text-green-800 text-center">Atas Izin Tuhan Yesus Kristus, Inilah Putra dan Putri kami untuk diberkati kepada Tuhan Yesus Kristus.</p>
          <img src="../images/leo.png" className="w-64 h-auto" alt="Scroll" />
          <p className="lg:text-6xl sm:text-4xl text-green-800 text-center font-Tangerine">Leo Puji Christyanto Simbolon</p>
          <p className="sm:text-lg text-green-800 text-center mb-1">Putra Pertama dari Bapak Tambun Simbolon (†) dan Ibu Sri Sulistyowati Sinaga</p>
          <a href="https://www.instagram.com/piyuid/" target="_blank" rel="noreferrer">
            <img src="../images/instagram.png" className="mb-8 w-8 h-auto" alt="Scroll" />
          </a>
          <img src="../images/christin.png" className="w-64 h-auto" alt="Scroll" />
          <p className="lg:text-6xl sm:text-4xl text-green-800 text-center font-Tangerine">Christin Putri Daly</p>
          <p className="sm:text-lg text-green-800 text-center mb-1">Putri Kedua dari Bapak Sudiyarto (†) dan Ibu Martje Daly</p>
          <a href="https://www.instagram.com/christineputridaly/" target="_blank" rel="noreferrer">
            <img src="../images/instagram.png" className="mb-8 w-8 h-auto" alt="Scroll" />
          </a>
        </div>
      </div>

      {/* Navbar bottom */}
      <nav className="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900 uppercase font-mono">

        <a href="#" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Home
        </a>

        <a href="#" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Features
        </a>

        <a href="#" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Profile
        </a>

        <a href="#" className="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          Settings
        </a>
      </nav>

      
    </div>
  )
}