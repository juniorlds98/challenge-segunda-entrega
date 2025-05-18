import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ChamadasFooter() {
  const imgUrl = "https://www.hospitalinfantilsabara.org.br/wp-content/themes/sabara2020/novo-site/img/ecmo-cover.webp";
  const imgUrl2 = "https://www.hospitalinfantilsabara.org.br/wp-content/themes/sabara2020/novo-site/img/uti-cover.webp";

  return (
    <div className="w-full pt-12 flex justify-center bg-white">
      <div className="w-full max-w-[1170px] px-4">
        <div className="my-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Card ECMO */}
            <div className="bg-[#e5001b] flex flex-col md:flex-row rounded-xl overflow-hidden flex-1">
              <img
                className="w-full md:w-[254px] h-[220px] object-cover"
                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
                src={imgUrl}
                alt="Ecmo Sabará"
              />
              <div className="p-6 text-white">
                <p className="text-lg font-bold mb-2">ECMO</p>
                <p className="text-sm mb-4">Tratamento para pacientes com falência cardíaca ou respiratória.</p>
                <a className="botaoCard" href="https://www.hospitalinfantilsabara.org.br/centro-de-excelencia-e-servicos/centro-de-doencas-do-coracao/o-que-tratamos/ecmo-ecls/">
                  SAIBA MAIS
                </a>
              </div>
            </div>

            {/* Card UTI */}
            <div className="bg-[#7db713] flex flex-col md:flex-row rounded-xl overflow-hidden flex-1">
              <img
                className="w-full md:w-[254px] h-[220px] object-cover"
                style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
                src={imgUrl2}
                alt="UTI Sabará"
              />
              <div className="p-6 text-white">
                <p className="text-lg font-bold mb-2">UTI</p>
                <p className="text-sm mb-4">Cuidado intensivo para crianças com quadros graves.</p>
                <a className="botaoCard" href="https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/unidade-de-terapia-intensiva/">
                  SAIBA MAIS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChamadasFooter;
