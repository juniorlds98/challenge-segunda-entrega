import imgUrl from '../assets/img/Hospital-Infantil-Sabará.png'
import imgUrl4 from "../assets/img/Instituto-PENSI.png"
import imgUrl5 from "../assets/img/Layer-2.png"
import imgUrl6 from "../assets/img/Layer-1.png"
import '../index.css';
import { Link } from 'react-router-dom';

function TelaConfirmacao() {
  return (
<div className="flex flex-col min-h-screen">
  <main className="flex flex-col items-center justify-center flex-1 w-full">
    <div className="bg-white shadow-lg rounded-xl border border-gray-300 flex flex-col items-center">
      <img
        src={imgUrl}
        alt="Hospital Infantil Sabará"
        className="w-[200px] mb-2"
      />

      <div className="buttons flex flex-col">
        <a href="#" className="button">ÁREA DO MÉDICO</a>
        <a href="#" className="button">ÁREA DE TRIAGEM</a>
        <a href="#" className="button">ÁREA DO RESPONSÁVEL</a>
        <Link to="/tela-administrativo" className="button">ÁREA ADMINISTRATIVA</Link>
      </div>
    </div>
  </main>

  <footer className="flex justify-center mt-auto w-full">
    <div className="flex items-center w-[1200px] bg-[#eaeaea] rounded-t-lg p-4 shadow-lg">
      <div className="w-[260px] px-[30px] pt-[10px] text-left">
        iniciativas da <br />
        <strong>Fundação José Luiz <br />Egydio Setúbal</strong>
      </div>
      <div className="flex items-center gap-[30px]">
        <a href="https://www.hospitalinfantilsabara.org.br/">
          <img src={imgUrl} alt="Hospital Infantil Sabará" className='w-[180px] h-[110px]' />
        </a>
        <a href="https://autismoerealidade.org.br/">
          <img src={imgUrl5} alt="Autismo e Realidade" className='w-[160px] h-[40px]' />
        </a>
        <a href="https://institutopensi.org.br/">
          <img src={imgUrl4} alt="Instituto PENSI" className='w-[180px] h-[110px]' />
        </a>
        <a href="https://fundacaojles.org.br/departamento-de-pesquisa/">
          <img src={imgUrl6} alt="Departamento de Pesquisa" className='w-[160px] h-[80px]' />
        </a>
      </div>
    </div>
  </footer>
</div>
  );
}



export default TelaConfirmacao;
