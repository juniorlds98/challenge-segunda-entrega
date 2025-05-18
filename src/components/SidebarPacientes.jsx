export default function SidebarPacientes({ pacientes }) {
  return (
    <aside className="w-60 p-4">
      <h2 className="mb-[10px] text-[18px] font-bold text-black">Pacientes para Triagem</h2>
      {pacientes.map((paciente, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-[#818084] p-[15px] text-white font-bold text-center rounded-[3px] mt-[10px] mb-[10px] w-full hover:bg-[#81808499] shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            className="w-4 h-4 rounded-full border border-black shadow-lg hover:shadow-xl transition-shadow"
            style={{ backgroundColor: paciente.cor }}
          />
          <span className="text-sm">{paciente.nome}</span>
        </div>
      ))}
    </aside>
  );
}

