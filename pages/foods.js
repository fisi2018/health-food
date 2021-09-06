import Card from "../components/card";
import {list} from "../tools/data/data";
import Layout from "../components/layout";
export default function Foods(){
    return(
        <Layout>

        <section>
            <h3>Nuestros platillos</h3>
            <h1>Los más deliciosos</h1>
            <div>
                {list.map((el)=>(
                    <Card element={el} />
                ))}
            </div>
        </section>
        <style jsx> {`
        div{
            width:100%;
            display:grid;
            gap:1.5rem;
            grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
        }
        h3{
            color:#E03A00;
        }
        h1{
            font-size:2rem;
            margin:1rem 0;
        }
        section{
            display:flex;
            padding:1rem;
            background-color:#F0EEF0;
            flex-direction:column;
            align-items:center;
        }
        `} </style>
        </Layout>
    )
}