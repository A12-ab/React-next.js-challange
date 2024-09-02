import Layout from "./Layout";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
const Products = ()=>{
    const [products, setProducts] = useState([
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/b.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/c.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/d.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/e.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/f.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/g.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/h.jpg'
        },
        {
            title: 'bed room set',
            price: 120000,
            discount: 15,
            thumbnail: '/images/i.jpg'
        }
    ])
    return(
        <Layout>
            <div>

                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">All Products</h1>
                    <p className="text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at nisi atque, ex odit quia illum rem. Eos corrupti nam voluptatem saepe aperiam libero do</p>
                     
                     <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-16">
                          {
                            products.map((item,index)=>(
                                <div key={index} className="bg-white shadow-lg border">
                                    <img src={item.thumbnail}/>
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label className="font-bold text-lg">৳{item.price-(item.price*item.discount)/100}</label>
                                            <del>৳{item.price}</del>
                                            <label className="text-gray-600">({item.discount}%)</label>
                                        </div>
                                        <button className="bg-green-600 py-2 w-full rounded text-white font-semibold mt-4">Buy now</button>
                                        <button className="bg-rose-600 py-2 w-full rounded text-white font-semibold mt-4">
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
export default Products;