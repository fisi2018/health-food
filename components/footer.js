import Link from "next/link";
export default function Footer(){
    return(
        <footer>
            <ul>
                <li>
                    <h3>Ubicaciones</h3>
                    <a href="https://www.google.com" target="_blank" >Perú</a>
                    <a href="https://www.google.com" target="_blank" >Chile</a>
                    <a href="https://www.google.com" target="_blank">Colombia</a>
                    <a href="https://www.google.com" target="_blank">Ecuador</a>
                </li>
                <li>
                    <h3>Enlaces internos</h3>
                    <Link href="/"><a >Home</a></Link>
                    <Link href="/about" ><a >About</a></Link>
                    <Link href="/foods" ><a >Foods</a></Link>
                    <Link href="/review" ><a>Order</a></Link>
                </li>
                <li> 
                    <h3>Información de contacto</h3>
                    <p>+51 914168574</p>
                    <p>+51 956784913</p>
                    <p>info_sanitus@sanitus.com</p>
                </li>
                <li>
                    <h3>Enlaces externos</h3>
                    <a href="https://www.facebook.com" target="_blank" >Facebook</a>
                    <a href="https://www.instagram.com" target="_blank">Instagram</a>
                    <a href="https://www.twitter.com" target="_blank">Twitter</a>
                    <a href="https://www.youtube.com" target="_blank">Youtube</a>
                </li>
            </ul>
            <div>
                Copyright @ 2021 by <span>Marco Fura</span>
            </div>
            <style jsx>{`
            li{
               list-style-type:none;
               display:flex;
               flex-direction:column;
               align-items:start;
            }
            h3{
                color:#19284E;
                font-size:1.5rem;
            }
            a,p{
                color:rgba(0,0,0,0.5);
                margin: 0.5rem 0;
            }
            a:hover{
                text-decoration:underline;
            }
            ul{
                display:grid;
                padding-bottom: 1.5rem;
                width:100%;
                gap:1.5rem;
                grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
            }
            div{
                padding: 2rem 0;
                width:70%;
                text-align:center;
                border-top:0.1rem solid rgba(0,0,0,0.2);
            }
            footer{
                flex:1;
                padding:1.5rem;
                background-color:white;
                display:flex;
                flex-direction:column;
                align-items:center;
                width:100%;
            }
            span{
                color:#83C0EF;
                font-weight:bolder;
                font-size:1.5rem;
                margin-left:0.25rem;
            }
            @media screen and (max-width:360px){
                div{
                    width:95%;
                }
            }
            `}</style>
        </footer>
    )
}