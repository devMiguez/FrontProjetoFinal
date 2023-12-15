
import './formConta.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';


function FormConta() {

  const [atributosCliente, setAtributosCliente] = useState({
    cpfCnpjDoCliente: '',
    tipoDaConta:'',
    saldo: '',
    statusConta: ''
  });

  const [listaAtributos, setListaAtributos] = useState([]);

  function handleChange(event){
    setAtributosCliente({...atributosCliente, [event.target.name]: event.target.value});
  }

  function HandleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8080/contas", atributosCliente).then(resultado =>{
      console.log(resultado)
      
      // Limpar o formulário após o envio bem-sucedido
      setAtributosCliente({
        cpfCnpjDoCliente: '',
        tipoDaConta:'',
        saldo: '',
        statusConta: ''
      });

    });

  }

  return (
    <div className="container">
      
      <form onSubmit={HandleSubmit}>
        <h1>Criar conta do cliente</h1>

        <div className='colunas'>

          <div>

              <label className='form-label'>Cpf/Cnpj do cliente cadastrado: </label>
              <input onChange={handleChange} value={atributosCliente.cpfCnpjDoCliente} name='cpfCnpjDoCliente' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Tipo da conta: </label>
              <input onChange={handleChange} value={atributosCliente.tipoDaConta} name='tipoDaConta' type='text' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>Saldo: </label>
              <input onChange={handleChange} value={atributosCliente.saldo} name='saldo' type='number' className='form-control'/>

          </div>
          <div>

              <label className='form-label'>StatusDaConta:</label>
              <input onChange={handleChange} value={atributosCliente.statusConta}  name='statusConta' type='text' className='form-control'/>

          </div>
         
          <div className="buts">
            <button type="submit" className="btn btn-success">Cadastrar</button>

            <Link to="/">
                <button type="button" className="btn btn-danger">Voltar</button>
            </Link>

          </div>


        </div>

      </form>
    </div>
  );
}

export default FormConta;
