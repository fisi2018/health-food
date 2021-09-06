import Header from "./header";
import Footer from "./footer";

export default function Layout({children}){
    return(
        <div className="container-all" >
            
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
            <style jsx global>
                {`
                .container-all{
                    display:flex;
                    flex-direction:column;
                    width:100%;
                }
                html,body{
                    box-sizing:border-box;
                    margin:0;
                }
                html{
                    overflow-x:hidden;
                    scroll-behavior:smooth;
                }
                *,
                *::after,
                *::before{
                    box-sizing:border-box;
                    font-family:sans-serif;
                    margin:0;
                    text-decoration:none;
                    padding:0;
                    outline:0;
                    border:0;
                }
                `}
            </style>
        </div>
    )
}