import React from "react";
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="flex justify-center h-full p-4 bg-bckg ">
      <div className="w-3/5 self-center p-6 pb-9 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col w-full ">
          <div className="flex text-center flex-col justify-center relative">
            <h1 className="text-2xl font-bold">Bienvenido</h1>
            <div className="m-3">
              <h3 className="text-base font-light tracking-wide">En esta aplicación el usuario tiene a su disposición una lista de tareas.</h3>
              <h4 className="text-base font-light tracking-wide">Dirijase a 
                <span className="text-blue-500"><Link to={'/tareas'}> Tareas </Link></span>
                para comenzar. Edite o elimine las tareas por defecto si lo desea y agregue sus propias tareas.  
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
