import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faInfo} from "@fortawesome/free-solid-svg-icons";
export default function Card({element}){
    return(
        <div className="container-card" >
            <span className="container-icon" >
                <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="container-icon-info" >
                <FontAwesomeIcon icon={faInfo} />
            </span>
            <img src={element.img} alt={element.name} />
            <h1> {element.name} </h1>
            <span className="container-macros" > <p>{element.carb}</p> <p>{element.fat}</p> <p>{element.prot}</p> <p>{element.cal}</p> </span>
            <div className="container-button" >
                <h2>{element.price}</h2>
                <button>Agregar orden</button>
            </div>
            <style jsx>{`
            h2{
                margin-right:1rem;
                color:#E03A00;
            }
            .container-icon:hover,
            .container-icon-info:hover{
                background-color:#E03A00;
                color:white;
            }
            .container-icon-info{
                right:-3rem;
                display:flex;
                cursor:pointer;
                top:1.5rem;
                position:absolute;
                justify-content:center;
                align-items:center;
                padding:0.5rem;
                border-radius:50%;
                width:2.5rem;
                height:2.5rem;
                background-color:#eee;
                transition: all 0.3s ease;
            }
            
            button{
                background-color:black;
                color:#eee;
                padding:0.5rem 1rem;
                cursor:pointer;
                border-radius:0.2rem;
                transition:all 0.3s ease;
            }
            button:hover{
                background-color:#E03A00;
                color:white;
            }
            .container-card{
                padding: 0.5rem 0;
                box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2);
                overflow:hidden;
                position:relative;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background-color:#fff;
                border-radius:0.4rem;
                border:0.1rem solid rgba(0,0,0,0.2);
            }
            .container-card:hover .container-icon{
                left:1.5rem;
            }
            .container-card:hover .container-icon-info{
                right:1.5rem;
            }
            .container-macros{
                display:flex;
            }
            .container-button{
                display:flex;
                align-items:center;
            }
                img{
                    width:10rem;
                    height:auto;
                }
            .container-icon{
                display:flex;
                cursor:pointer;
                top:1.5rem;
                left:-3rem;
                position:absolute;
                justify-content:center;
                align-items:center;
                padding:0.5rem;
                border-radius:50%;
                width:2.5rem;
                height:2.5rem;
                background-color:#eee;
                transition: all 0.3s ease;
            }
            h1{
                margin: 0.5rem 0;
            }
            p{
                margin: 0 0.25rem;
            }
            .container-macros{
                margin:0.5rem 0;
            }
            `}</style>
        </div>
    )
}