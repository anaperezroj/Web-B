function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/6373296/pexels-photo-6373296.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://w0.peakpx.com/wallpaper/730/429/HD-wallpaper-error-hata-programming-virus-heart-code-matrix-metal-music-heavy.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>

      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Comienzos difíciles</h3>
        <p className='text-2xl py-6'>Inicios a la programación</p>
        <p className='pb-6'>
          Hace unos meses empecé el bootcamp full stack con HACK A BOSS.Tengo
          que deciros que está siendo una experiencia dura pero que sin duda
          merece la pena. He adquirido en tan solo unos meses conocimientos
          sobre html, css, javascript, nodejs, react, git...Además de dedicarle
          muchas horas por mi cuenta. Sin duda ya me llamaba la atención este
          mundillo pero la experiencia me ha ayudado a confirmarlo del todo.
        </p>
        <div>
          <button className='bg-black text-white font-bold border border-black rounded-full px-4 py-2 mx-4 transition duration-300 ease-in-out hover:opacity-80'>
            Leer más
          </button>
          <button className='bg-black text-white font-bold border border-black rounded-full px-4 py-2 mx-4 transition duration-300 ease-in-out hover:opacity-80'>
            Ver ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
