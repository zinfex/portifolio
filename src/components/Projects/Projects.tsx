import './index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
    return (
        <div id="projects">
            <h1 style={{marginBottom: 50}}>Projetos</h1>
            <Swiper
                spaceBetween={-100}
                slidesPerView={3}
                navigation={true} 
                modules={[Navigation]} 
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="cardproject">
                        <img src="example.jpg" alt="imagem projeto" className="project-image" />
                        <div className="overlay">Ver Projeto</div>
                        <div className="infoproject">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam deserunt ipsa excepturi dolorem ea natus qui fugiat autem nul
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardproject">
                        <img src="example.jpg" alt="imagem projeto" className="project-image" />
                        <div className="overlay">Ver Projeto</div>
                        <div className="infoproject">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam deserunt ipsa excepturi dolorem ea natus qui fugiat autem nul
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardproject">
                        <img src="example.jpg" alt="imagem projeto" className="project-image" />
                        <div className="overlay">Ver Projeto</div>
                        <div className="infoproject">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam deserunt ipsa excepturi dolorem ea natus qui fugiat autem nul
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardproject">
                        <img src="example.jpg" alt="imagem projeto" className="project-image" />
                        <div className="overlay">Ver Projeto</div>
                        <div className="infoproject">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam deserunt ipsa excepturi dolorem ea natus qui fugiat autem nul
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardproject">
                        <img src="example.jpg" alt="imagem projeto" className="project-image" />
                        <div className="overlay">Ver Projeto</div>
                        <div className="infoproject">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam deserunt ipsa excepturi dolorem ea natus qui fugiat autem nul
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}