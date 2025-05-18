import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function CadastroPacienteSabara() {
  const [nomeCrianca, setNomeCrianca] = useState('');
  const [dataNascimentoCrianca, setDataNascimentoCrianca] = useState('');
  const [sexoCrianca, setSexoCrianca] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [nacionalidadeCrianca, setNacionalidadeCrianca] = useState('');
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('');
  const [enderecoCrianca, setEnderecoCrianca] = useState('');
  const [cepCrianca, setCepCrianca] = useState('');
  const [certidaoNascimento, setCertidaoNascimento] = useState('');
  const [cpfCrianca, setCpfCrianca] = useState('');
  const [cartaoSusCrianca, setCartaoSusCrianca] = useState('');

  const [nomeResponsavel1, setNomeResponsavel1] = useState('');
  const [rgResponsavel1, setRgResponsavel1] = useState('');
  const [cpfResponsavel1, setCpfResponsavel1] = useState('');

  const [nomeResponsavel2, setNomeResponsavel2] = useState('');
  const [rgResponsavel2, setRgResponsavel2] = useState('');
  const [cpfResponsavel2, setCpfResponsavel2] = useState('');

  const [temPlanoSaude, setTemPlanoSaude] = useState(false);
  const [nomeTitularPlano, setNomeTitularPlano] = useState('');
  const [numeroCarteirinhaPlano, setNumeroCarteirinhaPlano] = useState('');
  const [cpfTitularPlano, setCpfTitularPlano] = useState('');

  const [historicoMedico, setHistoricoMedico] = useState('');
  const [pedidoMedico, setPedidoMedico] = useState('');
  const [queixaPrincipal, setQueixaPrincipal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados
    console.log({
      nomeCrianca,
      dataNascimentoCrianca,
      sexoCrianca,
      nomeMae,
      nomePai,
      nacionalidadeCrianca,
      telefoneResponsavel,
      enderecoCrianca,
      cepCrianca,
      certidaoNascimento,
      cpfCrianca,
      cartaoSusCrianca,
      nomeResponsavel1,
      rgResponsavel1,
      cpfResponsavel1,
      nomeResponsavel2,
      rgResponsavel2,
      cpfResponsavel2,
      temPlanoSaude,
      nomeTitularPlano,
      numeroCarteirinhaPlano,
      cpfTitularPlano,
      historicoMedico,
      pedidoMedico,
      queixaPrincipal,
    });
    alert('Dados enviados para o console (simulação)!');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2>Cadastro de Paciente (Primeiro Atendimento - Hospital Sabará)</h2>

      <div className="mb-3">
        <h3>Dados da Criança</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nomeCrianca" className="form-label">Nome Completo:</label>
            <input type="text" className="form-control" id="nomeCrianca" value={nomeCrianca} onChange={(e) => setNomeCrianca(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="dataNascimentoCrianca" className="form-label">Data de Nascimento:</label>
            <input type="date" className="form-control" id="dataNascimentoCrianca" value={dataNascimentoCrianca} onChange={(e) => setDataNascimentoCrianca(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="sexoCrianca" className="form-label">Sexo:</label>
            <select className="form-select" id="sexoCrianca" value={sexoCrianca} onChange={(e) => setSexoCrianca(e.target.value)} required>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label htmlFor="nomeMae" className="form-label">Nome Completo da Mãe:</label>
            <input type="text" className="form-control" id="nomeMae" value={nomeMae} onChange={(e) => setNomeMae(e.target.value)} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="nomePai" className="form-label">Nome Completo do Pai:</label>
            <input type="text" className="form-control" id="nomePai" value={nomePai} onChange={(e) => setNomePai(e.target.value)} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <label htmlFor="nacionalidadeCrianca" className="form-label">Nacionalidade:</label>
            <input type="text" className="form-control" id="nacionalidadeCrianca" value={nacionalidadeCrianca} onChange={(e) => setNacionalidadeCrianca(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label htmlFor="telefoneResponsavel" className="form-label">Telefone de Contato (Responsável):</label>
            <input type="tel" className="form-control" id="telefoneResponsavel" value={telefoneResponsavel} onChange={(e) => setTelefoneResponsavel(e.target.value)} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="enderecoCrianca" className="form-label">Endereço Completo:</label>
            <input type="text" className="form-control" id="enderecoCrianca" value={enderecoCrianca} onChange={(e) => setEnderecoCrianca(e.target.value)} required />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <label htmlFor="cepCrianca" className="form-label">CEP:</label>
            <input type="text" className="form-control" id="cepCrianca" value={cepCrianca} onChange={(e) => setCepCrianca(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <label htmlFor="certidaoNascimento" className="form-label">Número da Certidão de Nascimento:</label>
            <input type="text" className="form-control" id="certidaoNascimento" value={certidaoNascimento} onChange={(e) => setCertidaoNascimento(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="cpfCrianca" className="form-label">CPF (se possuir):</label>
            <input type="text" className="form-control" id="cpfCrianca" value={cpfCrianca} onChange={(e) => setCpfCrianca(e.target.value)} />
          </div>
          <div className="col-md-2">
            <label htmlFor="cartaoSusCrianca" className="form-label">Cartão SUS:</label>
            <input type="text" className="form-control" id="cartaoSusCrianca" value={cartaoSusCrianca} onChange={(e) => setCartaoSusCrianca(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h3>Dados do Responsável Legal 1</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nomeResponsavel1" className="form-label">Nome Completo:</label>
            <input type="text" className="form-control" id="nomeResponsavel1" value={nomeResponsavel1} onChange={(e) => setNomeResponsavel1(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="rgResponsavel1" className="form-label">RG:</label>
            <input type="text" className="form-control" id="rgResponsavel1" value={rgResponsavel1} onChange={(e) => setRgResponsavel1(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="cpfResponsavel1" className="form-label">CPF:</label>
            <input type="text" className="form-control" id="cpfResponsavel1" value={cpfResponsavel1} onChange={(e) => setCpfResponsavel1(e.target.value)} required />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h3>Dados do Responsável Legal 2 (Opcional)</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nomeResponsavel2" className="form-label">Nome Completo:</label>
            <input type="text" className="form-control" id="nomeResponsavel2" value={nomeResponsavel2} onChange={(e) => setNomeResponsavel2(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label htmlFor="rgResponsavel2" className="form-label">RG:</label>
            <input type="text" className="form-control" id="rgResponsavel2" value={rgResponsavel2} onChange={(e) => setRgResponsavel2(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label htmlFor="cpfResponsavel2" className="form-label">CPF:</label>
            <input type="text" className="form-control" id="cpfResponsavel2" value={cpfResponsavel2} onChange={(e) => setCpfResponsavel2(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="temPlanoSaude" checked={temPlanoSaude} onChange={(e) => setTemPlanoSaude(e.target.checked)} />
        <label className="form-check-label" htmlFor="temPlanoSaude">Possui Plano de Saúde?</label>
      </div>

      {temPlanoSaude && (
        <div className="mb-3">
          <h3>Dados do Plano de Saúde</h3>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="nomeTitularPlano" className="form-label">Nome Completo do Titular:</label>
              <input type="text" className="form-control" id="nomeTitularPlano" value={nomeTitularPlano} onChange={(e) => setNomeTitularPlano(e.target.value)} required={temPlanoSaude} />
            </div>
            <div className="col-md-3">
              <label htmlFor="numeroCarteirinhaPlano" className="form-label">Número da Carteirinha:</label>
              <input type="text" className="form-control" id="numeroCarteirinhaPlano" value={numeroCarteirinhaPlano} onChange={(e) => setNumeroCarteirinhaPlano(e.target.value)} required={temPlanoSaude} />
            </div>
            <div className="col-md-3">
              <label htmlFor="cpfTitularPlano" className="form-label">CPF do Titular:</label>
              <input type="text" className="form-control" id="cpfTitularPlano" value={cpfTitularPlano} onChange={(e) => setCpfTitularPlano(e.target.value)} required={temPlanoSaude} />
            </div>
          </div>
        </div>
      )}

      <div className="mb-3">
        <h3>Informações Adicionais</h3>
        <div className="mb-2">
          <label htmlFor="historicoMedico" className="form-label">Histórico Médico (Condições preexistentes, alergias, medicações em uso):</label>
          <textarea className="form-control" id="historicoMedico" rows="3" value={historicoMedico} onChange={(e) => setHistoricoMedico(e.target.value)}></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="pedidoMedico" className="form-label">Pedido Médico (se houver):</label>
          <input type="text" className="form-control" id="pedidoMedico" value={pedidoMedico} onChange={(e) => setPedidoMedico(e.target.value)} />
        </div>
        <div>
          <label htmlFor="queixaPrincipal" className="form-label">Queixa Principal:</label>
          <textarea className="form-control" id="queixaPrincipal" rows="2" value={queixaPrincipal} onChange={(e) => setQueixaPrincipal(e.target.value)} required></textarea>
        </div>
      </div>

      <Link to="/tela-agenda" type='submit' className="btn btn-primary">Cadastrar</Link>
    </form>
  );
}

export default CadastroPacienteSabara;