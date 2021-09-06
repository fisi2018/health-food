import Link from "next/link";
import {useRouter} from "next/router";
import {useActivate} from "../tools/hooks/useActivate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch,faTimes,faBars,faHeart,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function Header(){
    const {asPath}=useRouter();
    const [ruta,setRuta]=useState("");
    useEffect(()=>{
        document.getElementById(asPath).classList.toggle("selected");
    },[]);
    useEffect(()=>{
        if(ruta!==""){
            console.log(ruta);
            document.getElementById(ruta).classList.toggle("selected");
            
        }

    },[ruta]);
    const handleLink=(link)=>{
        if(ruta!==""){

            document.getElementById(asPath).classList.toggle("selected");
        }
        setRuta(link);
    }
   
    const {showBar,showSearch}=useActivate({
        search:"search-form",
        bar:"nav-bar"
    });
    return(
        <header>
            
            <div className="logo-container" >
                <div className="container-img" >

                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F02%2F824429_fork_512x512.png&f=1&nofb=1" alt="healthy food"/>
                </div>
                <h1>Sánitus</h1>
            </div>
            <nav id="nav-bar" >
                <Link href="/">
                <a onClick={()=>handleLink("/")} id="/" >Home</a>
                </Link>
                <Link href="/about" >
                <a onClick={()=>handleLink("/about")} id="/about" >About</a>
                </Link>
                <Link href="/foods" >
                <a onClick={()=>handleLink("/foods")} id="/foods" >Foods</a>
                </Link>
                <Link href="/review" >
                <a onClick={()=>handleLink("/review")} id="/review" >Order</a>
                </Link>
            </nav>
            <div className="container-button" >
                <button onClick={showBar} >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button onClick={showSearch} >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                
            </div>
            <form id="search-form" action="" >
                <input type="search" name="" placeholder="Buscar comidas..." id="search-box" />
                <span> <FontAwesomeIcon icon={faSearch} /> </span>
                <span onClick={showSearch} className="icon-close" > <FontAwesomeIcon icon={faTimes} /> </span>
            </form>
            <style jsx >{`
            .selected:after{
                content:"";
                display:block;
                width:25%;
                height:25%;
                border: 0.1rem solid black;
                border-width: 0 0.1rem 0.1rem 0;
                background-color:transparent;
                bottom:0;
                right:0;
                position:absolute;
                transition:all 0.3s ease;
            }
            .selected:before{
                content:"";
                display:block;
                width:25%;
                height:25%;
                border: 0.1rem solid black;
                border-width: 0.1rem 0 0 0.1rem;
                background-color:transparent;
                top:0;
                left:0;
                position:absolute;
                transition:all 0.3s ease;
            }
            .selected{
                position:relative;
            }
            .icon-close{
                position:absolute;
                top:1rem;
                right:1rem;
            }
            form{
                position:fixed;
                background-color: rgba(0,0,0,0.7);
                top:0;
                left:0;
                display:flex;
                align-items:center;
                justify-content:center;
                bottom:0;
                right:0;
                transform:translateY(-100%);
                transition:transform 0.3s ease;
            } 
            .activate{
                transform:translateY(0);
            }
            
            span{
                color:white;
                cursor:pointer;
                font-size:3rem;
            }
            
            button:nth-child(1){
                display:none;
            }
            input{
                width:50rem;
                color:#fff;
                font-size:3rem;
                background-color:transparent;
                border-bottom: 0.1rem solid #fff;
            }
            input::placeholder{
                color:#eee;
            }
            header{
                position:sticky;
                background-color:white;
                top:0;
                left:0;
                padding: 1rem;
                right:0;
                justify-content:space-evenly;
                align-items:center;
                display:flex;
                z-index:1000;
                box-shadow:0 .5rem 1.5rem rgba(0,0,0,0.1);
            }
            a{
                padding:1rem 1.5rem;
                display:inline-block;
                color:black;
                transform:translateY(0);
                transition:all 0.3s ease;
            }
            nav{
                display:flex;
            }
            a:hover{
                transform:translateY(-0.5rem);
            }
            .container-button{
                display:flex;
                width:15rem;
                justify-content:space-evenly;
            }
            button{
                cursor:pointer;
                width:3rem;
                height:3rem;
                background-color:#EFEEF2;
                padding:1rem;
                border-radius:50%;
                transition:all 0.3s ease;
            }
            button:hover{
                background-color:#E03A00;
                transform:rotate(360deg);
                color:#fff;
            }
            img{
                max-width:5rem;
                width:100%;
                height:auto;
            }
            .container-img{
                flex:1;
                display:flex;
                justify-content:center;
            }
            .logo-container{
                display:flex;
                width:10rem;
                align-items:center;
            }
            
            h1{
                padding:0 0.5rem;
                color:rgba(0,0,0,0.7);
                font-size:1.7rem;
            }
            @media screen and (max-width:960px){
                nav{
                    flex-direction:column;
                    position:absolute;
                    background-color:#fff;
                    align-items:center;
                    width:100%;
                    top:100%;
                    clip-path:polygon(0 0,100% 0,100% 0,0 0);
                    transition: all 0.5s ease;
                }
                
                h1{
                    font-size:1.5rem;
                    padding:0 1rem;
                }
                .activateBar{
                    clip-path:polygon(0 0,100% 0,100% 100%,0 100%);
                }
                input{
                    width:80%;
                }
                button:nth-child(1){
                    display:block;
                }
            }
            @media screen and (max-width:360px){
                header{
                    padding:1rem 0;
                }
                h1{
                    font-size:1rem;
                    padding: 0 0.5rem;
                }
                img{
                    max-width:1.5rem;
                }
            }
            `} </style>
        </header>
    )
}