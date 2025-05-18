import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import imgUrl from '../assets/img/Hospital-Infantil-Sabará.png';
import imgUrl4 from "../assets/img/Instituto-PENSI.png";
import imgUrl5 from "../assets/img/Layer-2.png";
import imgUrl6 from "../assets/img/Layer-1.png";

function Iniciativas() {
  return (
    <footer className="flex justify-center mt-auto w-full">
      <div className="flex flex-wrap items-center w-full max-w-[1200px] bg-[#eaeaea] rounded-t-lg p-4 shadow-lg">
        <div className="w-full md:w-[260px] px-[30px] pt-[10px] text-left mb-4 md:mb-0">
          <p>
            Iniciativas da <br />
            <strong>Fundação José Luiz <br />Egydio Setúbal</strong>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[30px]">
          <a href="https://www.hospitalinfantilsabara.org.br/">
            <img src={imgUrl} alt="Hospital Infantil Sabará" className='w-[180px] h-[110px] md:w-[180px] md:h-[110px] object-contain' />
          </a>
          <a href="https://autismoerealidade.org.br/">
            <img src={imgUrl5} alt="Autismo e Realidade" className='w-[160px] h-[40px] md:w-[160px] md:h-[40px] object-contain' />
          </a>
          <a href="https://institutopensi.org.br/">
            <img src={imgUrl4} alt="Instituto PENSI" className='w-[180px] h-[110px] md:w-[180px] md:h-[110px] object-contain' />
          </a>
          <a href="https://fundacaojles.org.br/departamento-de-pesquisa/">
            <img src={imgUrl6} alt="Departamento de Pesquisa" className='w-[160px] h-[80px] md:w-[160px] md:h-[80px] object-contain' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Iniciativas;
