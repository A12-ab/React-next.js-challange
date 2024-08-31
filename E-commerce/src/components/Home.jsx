import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Home = ()=>{
    return(
        <Layout>
            <div>
                <header>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        
                    >
                        <SwiperSlide>
                            <img className="w-full h-[550px]" src="/images/a.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-[550px]" src="/images/b.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-[550px]" src="/images/c.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-[550px]" src="/images/d.jpg"/>
                        </SwiperSlide>
                        
                    </Swiper>
                </header>
            </div>
        </Layout>
        
    )
}
export default Home;