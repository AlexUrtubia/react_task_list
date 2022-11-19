export default function About() {
  return (
    <div className="flex justify-center h-full p-4 bg-bckg ">
      <div className="w-3/5 self-center p-6 pb-9 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col w-full ">
          <div className="flex  flex-col justify-center relative text-left">
            <h1 className="text-2xl font-bold mb-5 text-center">About</h1>
            <div className="p-6">
            
            <h3 className="text-base font-light tracking-wide ">Esta aplicación tiene como principal funcionalidad servir como gestor de lista de tareas, en donde es posible
            argegar, editar y eliminar tareas. </h3>
            <h3 className="text-base font-light tracking-wide "> Ha sido desarrollada en React, utilizando diversas librerías para potenciar su funcionamiento, entre las que se destacan:</h3>
              <ul className="text-center p-2">
                <li>React Router</li>
                <li>Tailwind</li>
                <li>Material Ui</li>
              </ul>
            <h3 className="text-base font-light tracking-wide"> La primera para gestionar las distintas rutas del proyecto y las dos últimas para el estilizado de la página mediante gestores de CSS</h3>
            <h4  className="text-base font-light tracking-wide">Hasta esta entrega, la aplicación realiza las funciones de mediante el uso de contexto y otros hooks propios de React. Además de utilizar localStorage para la permanencia de las tareas del usuario que se despliegan</h4>
              
            <div className="m-3">
              <hr />
              <h3 className="text-base font-light tracking-tight mt-5 text-center">Desarrollada por  
                <span className="text-blue-500"><a href="https://github.com/AlexUrtubia"> Alex Urtubia </a></span>
              </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
