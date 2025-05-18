import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgUrl7 from "../assets/img/Component-22.png";

function TempoDeAtendimento() {
  const tipos = [
    { tipo: "Emergência", tempo: "00:00", fila: 0 },
    { tipo: "Urgência", tempo: "05:00", fila: 2 },
    { tipo: "Preferencial", tempo: "10:00", fila: 1 },
    { tipo: "Isolamento", tempo: "03:00", fila: 1 },
    { tipo: "Pouca Urgência", tempo: "20:00", fila: 4 },
  ];

  return (
    <div>
      <div className="flex w-full border border-black bg-[#818084] p-4 text-white">
        <div className="flex ml-[10px] items-center w-full space-x-[30px] flex-wrap">
          <img src={imgUrl7} alt="Ícone" className="w-[50px] h-auto mr-4" />
          <div className="text-left">
            <p className="no-margin">Tempo estimado para atendimento <br /> médico após cadastro</p>
            <span className="font-bold">SÁBADO 19/04/2025 - 15:26</span>
          </div>
          <div className="col-12 col-lg-8 mt-4 mt-lg-0">
            <div className="flex flex-wrap justify-start gap-4">
              {tipos.map((item) => (
                <div
                  key={item.tipo}
                  className={`painel ${item.tipo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')}`}
                >
                  <div className="infoPainel">
                    <span>{item.tempo}</span> - Fila: <span>{item.fila}</span>
                  </div>
                  <div className="info2Painel">
                    {item.tipo}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              * Informamos que o tempo de espera pode variar em decorrência da complexidade de atendimento dos <br />
              pacientes ou emergências. <span className="underline">Clique aqui</span> para conferir os dias e horários mais movimentados do hospital.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempoDeAtendimento;