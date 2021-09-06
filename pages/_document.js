import Document, {Head,Main,Html,NextScript} from "next/document";
class MyDocument extends Document{
    render(){
        return(
            <Html lang="es" >
                <Head>
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