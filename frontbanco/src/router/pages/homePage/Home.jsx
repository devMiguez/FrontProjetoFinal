import './Home.css'

import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="container_principal">

            <div className="but">

                <Link to="/form">
                    <button type="button" class="btn btn-dark">Cadastro</button>
                </Link>

                <Link to="/conta">                    
                    <button type="button" class="btn btn-dark">Criar conta</button>
                </Link>

            </div>

        </div>
    );
}