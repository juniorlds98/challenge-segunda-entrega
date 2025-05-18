import React, { useState } from 'react';

export default function TabelaAgenda({ dias, horarios }) {
  const [events, setEvents] = useState({});
  const [selectedCell, setSelectedCell] = useState(null);
  const [newEvent, setNewEvent] = useState('');

  const handleCellClick = (dia, hora) => {
    setSelectedCell({ dia, hora });
  };

  const handleAddEvent = () => {
    if (selectedCell && newEvent.trim()) {
      const { dia, hora } = selectedCell;
      const eventKey = `${dia}-${hora}`;
      setEvents((prevEvents) => ({
        ...prevEvents,
        [eventKey]: [...(prevEvents[eventKey] || []), newEvent],
      }));
      setNewEvent('');
      setSelectedCell(null);
    }
  };

  const handleRemoveEvent = (dia, hora, index) => {
    const eventKey = `${dia}-${hora}`;
    setEvents((prevEvents) => {
      const updatedEvents = [...(prevEvents[eventKey] || [])];
      updatedEvents.splice(index, 1);
      return {
        ...prevEvents,
        [eventKey]: updatedEvents,
      };
    });
  };

  const renderEvents = (dia, hora) => {
    const eventKey = `${dia}-${hora}`;
    return events[eventKey]?.map((event, i) => (
      <div
        key={i}
        className="flex justify-between items-center text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded mb-1"
      >
        <span>{event}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveEvent(dia, hora, i);
          }}
          className="text-red-500 font-bold ml-2"
          title="Remover"
        >
          ×
        </button>
      </div>
    ));
  };

  return (
    <section className="bg-white p-4 shadow rounded">
      <h2 className="font-bold mb-2">Agenda</h2>

      {/* Navegação da agenda */}
      <div className="flex items-center mb-2 gap-2">
        <button className="px-2 bg-[#7b1] text-[#FFF] hover:bg-[#99CA5F] rounded">&lt;</button>
        <button className="px-2 bg-[#7b1] text-[#FFF] hover:bg-[#99CA5F] rounded">Hoje</button>
        <button className="px-2 bg-[#7b1] text-[#FFF] hover:bg-[#99CA5F] rounded">&gt;</button>
        <input
          type="text"
          value="22/04 à 29/04"
          className="px-2 py-1 border rounded bg-[#FFF]"
          readOnly
        />
        <button className="bg-[#7b1] hover:bg-[#99CA5F] text-[#FFF] px-2 py-1 rounded">Dia</button>
        <button className="bg-[#7b1] hover:bg-[#99CA5F] text-[#FFF] px-2 py-1 rounded">Semana</button>
      </div>

      {/* Tabela de horários */}
      <div className="overflow-auto">
        <table className="min-w-full table-fixed border">
          <thead>
            <tr>
              <th className="w-16"></th>
              {dias.map((dia, i) => (
                <th key={i} className="bg-[#05a] p-2 border text-left text-[#FFF] text-sm">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horarios.map((hora, i) => (
              <tr key={i}>
                <td className="text-sm text-gray-700 border p-1">{hora}</td>
                {dias.map((dia, j) => (
                  <td
                    key={j}
                    className="border p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCellClick(dia, hora)}
                  >
                    {renderEvents(dia, hora)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para adicionar evento */}
      {selectedCell && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3>Adicionar evento para {selectedCell.dia} - {selectedCell.hora}</h3>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Digite o evento"
          />
          <button
            onClick={handleAddEvent}
            className={`mt-2 px-4 py-2 rounded ${newEvent.trim() ? 'bg-[#7b1]' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!newEvent.trim()}
          >
            Adicionar Evento
          </button>
        </div>
      )}
    </section>
  );
}

