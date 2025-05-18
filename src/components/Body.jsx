import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import TempoDeAtendimento from './TempoDeAtendimento';

function Body() {
    const [busca, setBusca] = useState("");

    const medicos = [
        { nome: "Dra. Ana Paula", especialidade: "Pediatria", TempoDeAtendimento:30 },
        { nome: "Dr. João Silva", especialidade: "Cardiologia", TempoDeAtendimento:45 },
        { nome: "Dra. Carla Souza", especialidade: "Neurologia", TempoDeAtendimento:40 },
        { nome: "Dr. Pedro Martins", especialidade: "Ortopedia", TempoDeAtendimento:35 },
    ];

    const somaTempoAtendimento = medicos.reduce((total, medico) => total + medico.TempoDeAtendimento, 0);

    const tempoMedioAtendimento = somaTempoAtendimento / medicos.length;

    const listaFiltrada = [...medicos].sort((a, b) => {
        const aMatch = a.nome.toLowerCase().includes(busca.toLowerCase()) ? 0 : 1;
        const bMatch = b.nome.toLowerCase().includes(busca.toLowerCase()) ? 0 : 1;
        return aMatch - bMatch;
    });

    return (
        <div>
            <div className='flex w-[1170px] mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-[75%]'>
                        <div>
                            <h1 className='mb-[30px]'>Informações e Estatísticas</h1>
                            <div>
                                <p>Confira abaixo a <strong>lista de documentos necessários</strong> para ser atendido no Sabará Hospital Infantil.</p>
                                <p>Lembre os pais sempre de trazer:</p>
                                <ul>
                                    <li>Documento do responsável com foto;</li>
                                    <li>Documento de identificação da criança;</li>
                                    <li>Carteirinha do convênio.</li>
                                </ul>
                                <p>A apresentação desses documentos garantirá<strong> maior agilidade ao seu atendimento</strong>.</p>
                            </div>
                        </div>
                        <div>
                            <h2>Estatísticas</h2>
                            <div className='flex gap-x-[20px]'>
                            <div className='w-[50%] h-[500px]'>
                            <h3 className='flex justify-center items-center'>Tempo de atendimento</h3>
                                <div className='bg-[#7b1] p-[20px] mt-[30px] rounded-sm'>

                                    <p className='text-center text-[16px] text-[#555] mt-[10px] text-white font-bold'>
                                        O tempo médio de atendimento é calculado com base nas últimas consultas.
                                    </p>
                                    <div className='flex justify-center items-center mt-[20px]'>
                                        <p className='text-[24px] font-bold text-white text-center'>
                                            Tempo médio de atendimento: {tempoMedioAtendimento.toFixed(2)} minutos
                                        </p>
                                    </div>
                                </div> 
                            </div>  
                                <div className='w-[50%] h-[500px] overflow-y-auto'>
                                    <h3 className='flex justify-center items-center'>Médicos disponíveis</h3>
                                    <div className='bg-[#7b1] p-[20px] mt-[30px] rounded-sm'>
                                        <p className='text-white font-bold mb-[10px]'>Informe abaixo o nome do médico para realizar a busca:</p>
                                        <div className="relative w-[100%] max-w-[640px] mb-[20px]">
                                            <i className="bi bi-search absolute left-[15px] top-[50%] translate-y-[-50%] text-[#888]" />
                                            <input
                                                className="w-full h-[40px] pl-[40px] pr-[40px] border-[1px] border-[#c4c4c4] rounded-sm bg-white"
                                                type="text"
                                                id="busca-medico"
                                                placeholder="Buscar médico..."
                                                value={busca}
                                                onChange={(e) => setBusca(e.target.value)}
                                            />
                                        </div>
                                        <ul className="bg-white rounded-sm p-[10px] space-y-[10px]">
                                            {listaFiltrada.map((medico, index) => (
                                                <li key={index} className="border-b border-[#ccc] pb-[10px]">
                                                    <p className="font-semibold">{medico.nome}</p>
                                                    <p className="text-[14px] text-[#555]">{medico.especialidade}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%] h-[800px] '>
                        <div className='w-[100%] h-[100%]'>
                            <div className='pl-[30px] pt-[20px] pr-[15px] h-[1000px]'>
                                <h2 className='mb-[10px] text-[18px] font-bold text-black'>Registre atendimentos</h2>
                                <Link to="/tela-cadastro" className="botao">adicionar paciente</Link>
                                <p>
                                    <strong>Importante: ao realizar seu agendamento online, você receberá um SMS de confirmação próximo à data da consulta. A resposta (SIM ou NÃO) é gratuita. </strong> Por favor, nos avise se não puder comparecer à consulta, para que possamos dar a oportunidade para outra criança.
                                </p>
                                <p className='text-[#ff0000]'>
                                    O agendamento de consulta para pacientes com deficiências, com uso de oxigênio ou acamados (que necessitam de transporte por maca), deve ocorrer APENAS por telefone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
