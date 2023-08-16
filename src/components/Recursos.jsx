function Recursos() {
  return (
    <div className='max-w-[1400px] h-[600px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Recursos para juniors</h3>
        <p className='pt-4'>
          Este es un apartado con recursos y ayudas para los que estamos
          iniciando con el mundo de la programación.
          <br></br>
          <br></br>৹ Hacer deporte
          <br></br>৹ Viajar, desconectar
          <br></br>৹ Codear
          <br></br>৹ Meditar
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/4909526/pexels-photo-4909526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  );
}

export default Recursos;
