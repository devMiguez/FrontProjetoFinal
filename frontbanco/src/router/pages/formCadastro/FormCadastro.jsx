import './formCadastro.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';


function Servico() {

  const [atributosCliente, setAtributosCliente] = useState({
    nome: '',
    sobrenome:'',
    cpfCnpj: '',
    email: '',
    senha: '',
    tipoCliente: ''
  });
  const [listaAtributos, setListaAtributos] = useState([]);

  function handleChange(event){
    setAtributosCliente({...atributosCliente, [event.target.name]: event.target.value});
  }

  function HandleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8080/clientes", atributosCliente).then(resultado =>{
      console.log(resultado)
      
      // Limpar o formulário após o envio bem-sucedido
      setAtributosCliente({
        nome: '',
        sobrenome:'',
        cpfCnpj: '',
        email: '',
        senha: '',
        tipoCliente: ''
      });
    });
  }

  return (
    <div className="container">
      
      <form onSubmit={HandleSubmit}>
        <h1>Cadastro de cliente</h1>

        <div className='colunas'>

          <div>

              <label className='form-label'>Nome: </label>
              <input onChange={handleChange} value={atributosCliente.nome} name='nome' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Sobrenome: </label>
              <input onChange={handleChange} value={atributosCliente.sobrenome} name='sobrenome' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Cpf/Cnpj: </label>
              <input onChange={handleChange} value={atributosCliente.cpfCnpj} name='cpfCnpj' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Email:</label>
              <input onChange={handleChange} value={atributosCliente.email}  name='email' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Senha: </label>
              <input onChange={handleChange} value={atributosCliente.senha}  name='senha' type='password' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Tipo do cliente:</label>
              <input onChange={handleChange} value={atributosCliente.tipoCliente}  name='tipoCliente' type='text' className='form-control'/>

          </div>

          <div className="buts">
            <button type="submit" class="btn btn-success">Cadastrar</button>

            <Link to="/">
                <button type="button" class="btn btn-danger">Voltar</button>
            </Link>

          </div>


        </div>

      </form>
    </div>
  );
}

export default Servico;
