//import { useState } from 'react';
import UsuariosForm from './usuariosForm';
import UsuariosTable from './usuariosTable';

const usuarios = () => {
  //const [Hola, setHola] = useState()
  return (
    <>
    <div>
      <button className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Agregar +</button>
    </div>
    
        <UsuariosForm />
        <UsuariosTable />
    </>
  )
}

export default usuarios
