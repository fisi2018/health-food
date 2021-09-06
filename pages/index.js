import Layout from "../components/layout";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
SwiperCore.use([EffectCoverflow,Pagination]);
export default function Home(){
    return(
        <Layout>
            <section>

            <div className="container-slide" >
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide>
      <div className="container-content" >
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F74%2F89%2F9d%2F74899d3755352c8db11d4f2c2042aee4.png&f=1&nofb=1" alt="ceviche peruano"/>
        <div className="container-text" >
                <h3>Destacado de la semana</h3>
                <h2>Ceviche de pescado </h2>
                <p>El mismo sabor del ceviche tradicional peruano pero con muchas menos calorías</p>
                <button>Ordenar ahora</button>
        </div>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-content">

      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-H28WdJHTDwU%2FU1NWHliNuQI%2FAAAAAAAAFoQ%2Fp2URI-G6KBE%2Fs1600%2Fensalada-de-pollo-asado-y-verduras.png&f=1&nofb=1" alt="pollo verduras definicion" />
      <div className="container-text" >
                <h3>Para etapas de definición</h3>
                <h2>Pechuga de pollo con verduras</h2>
                <p>Comida especialmente preparada para etapas de definición, muy baja en calorías y alta en proteínas, acompañada de una variedad de verduras.</p>
                <button>Ordenar ahora</button>
        </div>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-content">

      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F11%2FApple-Pie-PNG-Free-Download.png&f=1&nofb=1" alt="postre pie manzana" />
      <div className="container-text" >
                <h3>Para etapas de volumen</h3>
                <h2>Pie proteico</h2>
                <p>Un delicioso postre para esas largas etapas de volumen, hecho a base de caseína y suero de leche, alto en proteínas.</p>
                <button>Ordenar ahora</button>
        </div>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-content">

      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fjugosnaturalesparaadelgazar.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fbebidas-para-bajar-de-peso1.jpg&f=1&nofb=1" alt="bebidas naturales frutas" />
      <div className="container-text" >
                <h3>Energizantes</h3>
                <h2>Bebidas energizantes a base de fruta</h2>
                <p>Energizantes naturales hechos a base de una variedad de frutas, excelente para esos días de alto entrenamiento.</p>
                <button>Ordenar ahora</button>
        </div>
      </div>
  </SwiperSlide>
  
  </Swiper>
            </div>
            </section>
            <section>
                <h4>Comentarios de nuestros clientes</h4>
                <h2>Reseñas</h2>
                <div className="container-slider-reviews">
                    <Swiper breakpoints={{
                        320:{
                            slidesPerView:1
                        },
                        560:{
                            slidesPerView:2,
                            spaceBetween:10
                        },
                        960:{
                            slidesPerView:3,
                            spaceBetween:10
                        },
                        1100:{
                            slidesPerView:4,
                            spaceBetween:10
                        }
                    }} slidesPerView={1} spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide>
      <div className="container-slide-review">
      <span className="header-review" >
          <span>
          <img src="https://placeimg.com/640/480/people" alt="perfil review"/>
          <h4>Maria Venegas</h4>
          </span>
          <FontAwesomeIcon size="3x" color="rgba(0,0,0,0.3)" icon={faQuoteRight} />
      </span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quas ullam, ad, nisi atque vero reprehenderit exercitationem saepe autem quis ipsam sunt assumenda porro commodi laboriosam aperiam? Natus, amet?</p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-slide-review">
      <span className="header-review" >
          <span>
          <img src="https://placeimg.com/640/480/any" alt="perfil usuario review"/>
          <h4>Pedro Miranda</h4>
          </span>
          <FontAwesomeIcon size="3x" color="rgba(0,0,0,0.3)" icon={faQuoteRight} />
      </span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quas ullam, ad, nisi atque vero reprehenderit exercitationem saepe autem quis ipsam sunt assumenda porro commodi laboriosam aperiam? Natus, amet?</p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-slide-review">
      <span className="header-review" >
          <span>
          <img src="https://placeimg.com/640/480/place" alt="perfil 2 review"/>
          <h4>Rodrigo Mendoza</h4>
          </span>
          <FontAwesomeIcon size="3x" color="rgba(0,0,0,0.3)" icon={faQuoteRight} />
      </span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quas ullam, ad, nisi atque vero reprehenderit exercitationem saepe autem quis ipsam sunt assumenda porro commodi laboriosam aperiam? Natus, amet?</p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-slide-review">
      <span className="header-review" >
          <span>
          <img src="https://placeimg.com/640/480/carlos" alt="perfil 2 review"/>
          <h4>Carlos Gómez</h4>
          </span>
          <FontAwesomeIcon size="3x" color="rgba(0,0,0,0.3)" icon={faQuoteRight} />
      </span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quas ullam, ad, nisi atque vero reprehenderit exercitationem saepe autem quis ipsam sunt assumenda porro commodi laboriosam aperiam? Natus, amet?</p>
      </div>
  </SwiperSlide>
  <SwiperSlide>
      <div className="container-slide-review">
      <span className="header-review" >
          <span>
          <img src="https://placeimg.com/640/480/maria" alt="perfil 2 review"/>
          <h4>Maria Cori</h4>
          </span>
          <FontAwesomeIcon size="3x" color="rgba(0,0,0,0.3)" icon={faQuoteRight} />
      </span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quas ullam, ad, nisi atque vero reprehenderit exercitationem saepe autem quis ipsam sunt assumenda porro commodi laboriosam aperiam? Natus, amet?</p>
      </div>
      </SwiperSlide>
      
  </Swiper>
  
                </div>
            </section>
            <style jsx>{`
            
            .header-review{
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
            }
            .header-review>span{
                display:flex;
                align-items:center;
                margin-bottom:1rem;
                justify-content:space-between;
            }
            .header-review>span>h4{
                font-weight:bolder;
                color:#19284E;
                font-size:1rem;
            }
            .header-review>span>img{
                width:4rem;
                border-radius:50%;
                height:4rem;
                margin-right:0.25rem;
            }
            .container-slider-reviews{
                width:100%;
                padding:0 3rem;
            }
            .container-slide-review{
                width:100%;
                background-color:#fff;
                border-radius:0.4rem;
                
                padding:1rem;
                border:0.1rem solid rgba(0,0,0,0.2);
            }
            button{
                background-color:#19284E;
                width:8rem;
                padding:1rem 0;
                color:white;
                cursor:pointer;

            }
            h4{
                color:#E03A00;
                font-size:1.5rem;
                margin-left:0.5rem;
            }
            h3{
                font-weight:regular;
                color:#E03A00;
            }
            h2{
                color:#19284E;
                margin:1.5rem 0;
                font-size:3rem;
            }
            p{
                margin:0 0 1rem 0;
                color:#777576;
            }
            section{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                padding:1rem;
            }
            section:nth-child(2){
                background-color:#fff;
                padding-bottom:2rem;
            }
            .container-content{
                width:100%;
                height:100%;
                background-color:white;
                justify-content:center;
                display:flex;
            }
                .container-slide{
                    width:100%;
                    justify-content:center;
                    display:flex;
                    padding:1rem;
                }
                .container-text{
                    display:flex;
                    flex:1;
                    padding-left:1rem;
                    flex-direction:column;
                    justify-content:center;
                }
                img{
                    width:40%;
                    height:auto;
                }
                @media screen and (max-width:960px){
                    .container-content{
                        flex-direction:column-reverse;
                        align-items:center;
                    }
                    img{
                        width:80%;
                    }
                }
            `}</style>
        </Layout>
    )
}