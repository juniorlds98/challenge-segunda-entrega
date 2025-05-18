import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SidebarPacientes from './SidebarPacientes';
import HeaderAcoes from './HeaderAcoes';
import TabelaAgenda from './TabelaAgenda';

export default function AgendaMedica() {
  const dias = [
    "Segunda 14/Abril",
    "Terça 15/Abril",
    "Quarta 16/Abril",
    "Quinta 17/Abril",
    "Sexta 18/Abril"
  ];

  const gravidades = [
    { nivel: "Emergência", cor: "#b9001d" },
    { nivel: "Urgência", cor: "#ffc107" },
    { nivel: "Preferencial", cor: "#ff5722" },
    { nivel: "Isolamento", cor: "#0055aa" },
    { nivel: "Pouca Urgência", cor: "#77bb11" },
  ];

  const pacientes = [
    { nome: "João da Silva", nivel: "Emergência" },
    { nome: "Maria Oliveira", nivel: "Urgência" },
    { nome: "Carlos Mendes", nivel: "Pouca Urgência" },
    { nome: "Ana Costa", nivel: "Preferencial" },
    { nome: "Rafael Lima", nivel: "Emergência" },
  ];

  const horarios = Array.from({ length: 9 }, (_, i) => `${11 + i}:00`);

  const pacientesComCores = pacientes.map((p) => {
    const gravidade = gravidades.find((g) => g.nivel === p.nivel);
    return {
      ...p,
      cor: gravidade?.cor || "#ccc",
    };
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      <div className="w-full md:w-64 bg-white shadow-md">
        <SidebarPacientes pacientes={pacientesComCores} />
      </div>

      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        <HeaderAcoes />
        <TabelaAgenda dias={dias} horarios={horarios} />
      </main>
    </div>
  );
}
