import Layout from "../components/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye,faCheckCircle} from "@fortawesome/free-solid-svg-icons";
export default function Review(){
    return(
        <Layout>

        <section>
            <h3>Sección de orden</h3>
            <h1>Realiza tus pedidos</h1>
            <div>
                <form action="">
                    <span>
                    <label for="name">Tu nombre</label>
                        <input id="name" placeholder="Ingresa tu nombre" type="text"/>
                    </span>
                    <span>
                    <label for="number">Tu número</label>
                        <input id="number" placeholder="Ingresa tu número de contacto" type="text"/>
                    </span>
                    <span>
                    <label for="date">¿Para qué fecha?</label>
                        <input id="date" type="date"/>
                    </span>
                    <span>
                        <label for="car">Tu orden</label>
                        <button id="car" > <FontAwesomeIcon icon={faEye}/> Ver carrito</button>
                    </span>
                    <span>
                    <label for="address">Tu dirección</label>
                        
                        <textarea name="" id="address" cols="20" rows="10"></textarea>
                    </span>
                    <span>
                    <label for="message">Agregar mensaje </label>
                        <textarea name="" id="message" cols="20" rows="10"></textarea>
                    </span>
                    <button>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Enviar formulario
                    </button>
                </form>
            </div>

        </section>
        <style jsx>{`
        button{
            padding:0.5rem 1rem;
            margin-top:0.5rem;
            background-color:#19284E;
            color:#eee;
            cursor:pointer;
            transition: all 0.3s ease;
        }
        textarea{
            resize:none;
        }
        form>button{
            padding:1rem 1rem;
            display:flex;
            width:50%;
            justify-content:space-around;
            align-items:center;
            font-weight:bolder;
            font-size:1.15rem;
        }
        
        span:nth-child(4){
            align-items:start;
        }
        button:hover{
            background-color:#E03A00;
            color:white;
        }
        form{
            width:80%;
            padding:1rem;
            border-radius:0.2rem;
            box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
            border: 0.1rem solid rgba(0,0,0,0.2);
            display:grid;
            background-color:white;
            gap:1.5rem;
            grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
        }
        span{
            display:flex;
            flex-direction:column;
        }
        input,textarea{
            background-color:#eee;
            padding:0.5rem;
            border-radius:0.2rem;
            margin: 0.5rem 0;
        }
        section{
            width:100%;
            padding:1.5rem;
            background-color:#eee;
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        div{
            width:100%;
            display:flex;
            justify-content:center;
        }
        h1{
            margin: 0.5rem 0;
        }
        h3{
            color:#E03A00;
        }
        @media screen and (max-width:360px){
            form>button{
                font-size:0.75rem;
                width:90%;
            }
        }
        `}</style>
        </Layout>
    )
}