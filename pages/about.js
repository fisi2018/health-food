import Layout from "../components/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins,faShippingFast,faUtensils} from "@fortawesome/free-solid-svg-icons";
export default function About(){
    return(
        <Layout>

        <section>
                <h3>Acerca de nosotros</h3>
                <h1>¿Quiénes somos?</h1>
                <div className="container-about" >
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jing.fm%2Fclipimg%2Ffull%2F28-287287_fresh-healthy-food-background-png-healthy-food-transparent.png&f=1&nofb=1" alt="comida saludable dieta"/>
                    <div className="container-text" >
                        <h2>La mejor comida balanceada para ti</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cupiditate temporibus vel facilis ut et nulla quo? Ipsa odit doloribus esse quasi quia atque, quas sunt aperiam amet assumenda odio!</p>
                        <ul>
                            <li>
                                <span> <FontAwesomeIcon icon={faCoins} /> <p>Económico</p></span>
                            </li>
                            <li><span> <FontAwesomeIcon icon={faShippingFast} /> <p>Rápido</p></span></li>
                            <li><span> <FontAwesomeIcon icon={faUtensils} /> <p>Calidad</p></span></li>
                        </ul>
                        <button> Conoce más de nosotros </button>
                    </div>
                </div>
        </section>
        <style jsx >{`
        h3{
            color:#E03A00;
            margin:1rem 0;
        }
        button{
            background-color:#19284E;
            cursor:pointer;
            color:white;
            margin: 1rem 0;
            border-radius:5px;
            padding:1rem 1.5rem;
            width:12rem;
        }
            section{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                padding:1rem;
            }
            .container-about{
                width:100%;
                display:flex;
                justify-content:space-evenly;
            }
            img{
                width:40%;
                height:auto;
            }
            h2{
                color:#19284E;
                font-size:3rem;
                margin-bottom:1rem;
            }
            h1{
                color:#19284E;
                font-size:2rem;
            }
            ul{
                display:flex;
                width:100%;
                justify-content:space-between;
            }
            li{
                list-style-type:none;
            }
            span{
                display:flex;
                color:white;
                padding: 1rem 1.5rem;
                border-radius:8px;
                background-color:#E03A00;
            }
            span>p{
                margin:0 0.5rem;
            }
            p{
                margin-bottom:1rem;
            }
            .container-text{
                width:30rem;
                padding:1rem;
                display:flex;
                justify-content:center;
                flex-direction:column;
            }
            @media screen and (max-width:960px){
                .container-about{
                    flex-direction:column;
                    align-items:center;
                }
                img{
                    width:60%;
                }
            }
            @media screen and (max-width:540px){
                img{
                    width:80%;
                }
                h2{
                    font-size:2rem;
                }
                .container-text{
                    width:100%;
                    align-items:center;
                }
                ul{
                    flex-direction:column;
                    align-items:center;
                }
                li{
                    margin:0.5rem;
                }
            }
        `} </style>
        </Layout>
    )
}