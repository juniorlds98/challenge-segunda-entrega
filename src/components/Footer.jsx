import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgUrl7 from "../assets/img/Fundação-José-Luiz-Egydio-Setúbal-blue.png"
import imgUrl8 from "../assets/img/creditos.png"

function Footer(){
    return(
        <div className='flex justify-center pb-[100px] pt-[60px] w-full border border-black bg-[#005aa9]'>
            <div className='w-[1137px]'>
                <div className='flex flex-wrap gap-[40px]'>
                    <div className='no-margin flex flex-col items-center'>
                        {/* Logo */}
                        <div>
                            <img src={imgUrl7} alt="Fundação José Luiz Egydio Setúbal" className='w-[175px] mb-[50px]'/>
                        </div>
                        {/* Texto da Missão */}
                        <div className='w-full ml-[30px]'>
                            <p className='mb-[10px] text-white text-[20px] font-bold'>Nossa Missão</p>
                            <p className="text-[14px] leading-[16px] text-white">
                                Excelência em saúde para <br />crianças e adolescentes por meio <br />da assistência, e propiciando <br />campo de ensino e pesquisa.
                            </p>

                        {/* Redes Sociais */}
                        <p className="mt-[30px] text-white text-[17px] font-sans text-[20px] font-bold">Redes Sociais</p>
                            <div className='flex items-center w-full mt-[10px] gap-x-[20px]'>
                                <a href="https://www.instagram.com/hospitalsabara/" className="text-[14px] flex items-center font-[400] font-sans">
                                    <i className="bi bi-instagram text-[25px] text-[#FFF] hover:text-[#e0e0e0] transition-all duration-200"></i>
                                </a>
                                <a href="https://www.facebook.com/HospitalSabara" className="text-[14px] flex items-center font-[400] font-sans">
                                <i className="bi bi-facebook text-[25px] text-[#FFF] hover:text-[#e0e0e0] transition-all duration-200"></i>
                                </a>
                                <a href="https://www.youtube.com/saudedainfancia" className="text-[14px] flex items-center font-[400] font-sans">
                                    <i className="bi bi-youtube text-[25px] text-[#FFF] hover:text-[#e0e0e0] transition-all duration-200"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/hospital-infantil-sabara/" className="text-[14px] flex items-center font-[400] font-sans">
                                    <i className="bi bi-linkedin text-[25px] text-[#FFF] hover:text-[#e0e0e0] transition-all duration-200"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='lista'>
                        <p className="titulo">Nossos Serviços</p>
                        <div>
                            <ul  className='lista'>
                                <li>
                                    <a href="" className='itens'>Alta Complexidade</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Ambulatório de Especialidades</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Apoio Diagnóstico</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Centro Cirurgico</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Hospital Dia</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Internação</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Pronto Socorro</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Terapia Intensiva</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lista'>
                        <p className="titulo">Alta Complexidade</p>
                        <div>
                            <ul className='p-0 m-0 list-none'>
                                <li>
                                    <a href="" className='itens'>Aerodigestivo</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Cardiologia</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Nefrologia</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Neurologia</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Oncologia</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Reabilitação Intestinal</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Terapia Fetal e Neonatal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lista'>
                        <p className="titulo">Institutocional</p>
                        <div>
                            <ul className='p-0 m-0 list-none'>
                                <li>
                                    <a href="" className='itens'>Canal LGPD</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Escritório de Inovação</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Fundação JLES</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Imprensa</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Instituto PENSI</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Programa de Compilance</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Programa de Voluntáriado</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Quem Somos</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Trabalhe Conosco</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lista'>
                        <p className="titulo">Saúde Infantil</p>
                        <div>
                            <ul className='p-0 m-0 list-none'>
                                <li>
                                    <a href="" className='itens'>Doenças de A a Z</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Notícias</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Alimentação Infantil</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Curva de Crescimento</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Cálculo de IMC Infantil</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Calendário de Vacinação</a>
                                </li>
                                <li>
                                    <a href="" className='itens'>Calculadora de Jejum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                <div className='w-[30%]'>
                    <img src={imgUrl8} alt="" />
                </div>
                <div  className='w-[50%] flex align-center text-white'>
                    <div>                    
                        Copyright © 2024 <strong>Hospital Infantil Sabará</strong> - Todos os direitos reservados <br /> <a className="mr-[20px] text-white" href="https://www.hospitalinfantilsabara.org.br/politica-de-privacidade">Política de Privacidade</a> <a className="mr-[20px] text-white" href="https://www.hospitalinfantilsabara.org.br/politica-de-cookies">Política de Cookies</a> <a className="mr-[20px] text-white" href="https://www.hospitalinfantilsabara.org.br/termos-e-condicoes-de-uso">Termos e Condições de Uso</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );

}

export default Footer;

<a href="" target="_blank"><svg class="icon"><use xlink:href="#instagram"></use></svg></a>