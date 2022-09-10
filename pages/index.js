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
        <h1 className="absolute bottom-0 left-0 lg:p-20 text-white text-8xl font-Greatvibes drop-shadow-xl">Leo &<br />Christin</h1>
      </div>
      <div className="w-full lg:w-5/12 ml-auto">
        <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">Leo Christin</h2>
          <p className="mb-5">October 1, 2022</p>
        </div>
        <div className="bg-red-50 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">Acara</h2>
          <p className="mb-5">GPIB Filadefia</p>
        </div>
        <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
          <h2 className="text-4xl mb-5">Resepsi</h2>
          <p className="mb-5">CIMB NIAGA</p>
        </div>
      </div>
    </div>
  )
}