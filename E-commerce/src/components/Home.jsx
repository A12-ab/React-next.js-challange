import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Pagination } from 'swiper/modules';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseAppConfig from "../utils/firebase-config";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const auth = getAuth(firebaseAppConfig);
const db= getFirestore(firebaseAppConfig);
const Home = ()=>{
    const [products, setProducts] = useState([])
    const [session, setSession] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setSession(user)
            }
            else{
                setSession(null);
            }
        })
    },[])

    useEffect(()=>{
        const req = async()=>{
            const snapshot = await getDocs(collection(db, "products"))
            const tmp =[]
            snapshot.forEach((doc)=>{
                const allProducts = doc.data();
                allProducts.id = doc.id
                tmp.push(allProducts)
            })
            setProducts(tmp);

        }
        req();
    },[])

    const addTocart = async(item)=>{
        try{
            item.userId = session.uid;
            await addDoc(collection(db, "carts"), item)
        }catch(err)
        {
            new Swal({
                icon: 'error',
                title: 'Failed !',
                text: err.message
            })
        }

    }
    return(
        <Layout>
            <div>
                <header>
                    <Swiper
                        className="relative z-[-1]"
                        pagination={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        
                    >
                        <SwiperSlide>
                            <img className="w-full md:h-[550px] h-[150px]" src="/images/a.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full md:h-[550px] h-[150px]" src="/images/b.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full md:h-[550px] h-[150px]" src="/images/c.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full md:h-[550px] h-[150px]" src="/images/d.jpg"/>
                        </SwiperSlide>
                        
                    </Swiper>
                </header>

                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">Latest Products</h1>
                    <p className="text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at nisi atque, ex odit quia illum rem. Eos corrupti nam voluptatem saepe aperiam libero do</p>
                     
                     <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-16">
                          {
                            products.map((item,index)=>(
                                <div key={index} className="bg-white shadow-lg border">
                                    <img src={item.image ? item.image : '/images/a.jpg'}/>
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold capitalize">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label className="font-bold text-lg">৳{item.price-(item.price*item.discount)/100}</label>
                                            <del>৳{item.price}</del>
                                            <label className="text-gray-600">({item.discount}%)</label>
                                        </div>
                                        <button className="bg-green-600 py-2 w-full rounded text-white font-semibold mt-4">Buy now</button>
                                        <button className="bg-rose-600 py-2 w-full rounded text-white font-semibold mt-4" onClick={()=>addTocart(item)}>
                                           <i className="ri-shopping-cart-line mr-2"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                
                            ))
                          }
                     </div>
                </div>
            </div>
        </Layout>
        
    )
}
export default Home;