export default function HeaderAcoes() {
  return (
    <div className="mb-4">
      <h1 className="text-lg font-bold mb-2">Nome do doutor</h1>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap items-start sm:items-center mb-4">
        <input
          type="text"
          placeholder="Buscar paciente"
          aria-label="Buscar paciente"
          className="p-2 border border-gray-300 rounded bg-white w-full sm:w-auto"
        />

        <div className="flex flex-wrap gap-2">
          <button className="bg-[#7b1] px-4 py-2 rounded hover:bg-[#99CA5F] transition text-white">
            Novo Paciente
          </button>
          <button className="bg-[#7b1] px-4 py-2 rounded hover:bg-[#99CA5F] transition text-white">
            Lista de espera
          </button>
          <button className="bg-[#7b1] px-4 py-2 rounded hover:bg-[#99CA5F] transition text-white">
            Observações
          </button>
          <button className="bg-[#7b1] px-4 py-2 rounded hover:bg-[#99CA5F] transition text-white">
            Agendamento online
          </button>
        </div>
      </div>
    </div>
  );
}
