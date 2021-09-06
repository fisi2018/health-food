import Document, {Head,Main,Html,NextScript} from "next/document";
class MyDocument extends Document{
    render(){
        return(
            <Html lang="es" >
                <Head>
                    <title>Sánitus</title>
                    <meta name="description" content="Otorgando las mejores opciones de comidas saludables, somos una empresa
                     comprometida con la salud física y mental de todas las personas interesadas en realizar un cambio físico."></meta>
                    <link rel="icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F02%2F824429_fork_512x512.png&f=1&nofb=1" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;