import { useState } from "react";
import Layout from "../Layout";
const Products = () =>{
    const [products, setProducts] = useState([
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/a.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/b.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/c.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/d.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/e.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/f.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/g.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/h.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/i.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/j.jpg'
        },
        {
            title: 'bed room set',
            price: 450000,
            discount: 20,
            description: 'this is a wooden and qualityful bed set',
            image: '/images/k.jpg'
        }
    ])
    return (
        <Layout>
            <h1 className="text-xl font-semibold mb-4">Products</h1>
            <div className="grid grid-cols-3 gap-8 px-8">
                {
                    products.map((item, index)=>(
                        <div key={index} className="bg-white shadow-lg rounded-md">
                            <img 
                               src={item.image} 
                               className="rounded-t-md h-[250px] w-full object-cover"
                            />
                            <div className="p-4">
                                <h1 className="text-md capitalize font-semibold">{item.title}</h1>
                                <p className="text-gray-500">{item.description.slice(0,50)}</p>
                                <div className="flex gap-2">
                                    <p>{item.price - (item.price*item.discount)/100}</p>
                                    <del>{item.price}</del>
                                    <label className="text-gray-400">({item.discount}% off)</label>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
        

    )
}

export default Products;