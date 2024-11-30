import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';


function About(){
    return(
        <div className="h-[3000px] bg-slate-400 flex flex-col justify-between">
      <div>
        <nav>
          <div className="fixed top-0 left-0 w-full bg-sky-600 text-white p-4 flex justify-between items-center">
            <div className="text-4xl font-sherif">
              Mamoune Benouna
            </div>
            
            <ul className="flex space-x-8 text-2xl">
              <li className="hover:text-blue-400 mr-4"><Link to="/">Home</Link></li>
              <li className="hover:text-blue-400 mr-4"><Link to="/Contact">Contact</Link></li>
              <li className="hover:text-blue-400 mr-4"><Link to="/About">About</Link></li>
            </ul>
          </div>
        </nav>
        
        {/* Section principale */}
        <div className="py-20">
          <h1 className="text-5xl font-sherif text-center text-white mb-8 py-8">About</h1>
        </div>

        {/* Container contenant le texte et l'image */}
        <div className="flex justify-center items-start px-8 py-20 space-x-8">
          {/* Texte à gauche */}
          <div className="max-w-2xl text-lg leading-relaxed text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus dicta at in molestias nobis soluta quaerat dolorum. Ipsum asperiores modi debitis tempora suscipit ullam pariatur ex temporibus, illum quidem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quisquam optio hic. Molestiae numquam fugiat ducimus commodi, asperiores eligendi consequatur quae quaerat et ut repudiandae possimus laboriosam maxime non. Minima.
            </p>
          </div>

          {/* Image du CV à droite */}
          <div className="w-64 h-64 bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
            <img src="image411.png" alt="cv" className="max-w-full max-h-full"/>
          </div>
          <a
  href="/cv.mamoune.pdf"
  download="Cv Mamoune"
  className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
>
  Télécharger
</a>
        </div>
        <Divider>heheboy</Divider>
      </div>
    



      <footer className="text-white p-4 text-center mt-auto">
        <p className="text-lg">&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
      </div>
    );
}

export default About;
