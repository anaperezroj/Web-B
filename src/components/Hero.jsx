function Hero() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        '
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Ana Pérez</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Emociones & pensamientos
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nesciunt consequatur voluptatem corrupti provident omnis incidunt
            dolores ratione, quos amet?
          </p>
          <button className='bg-black text-white font-bold border border-black rounded-full px-4 py-2 mx-4 transition duration-300 ease-in-out hover:opacity-80'>
            Reserva ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

/*https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1*/
