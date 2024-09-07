import { useState, useRef } from "react";
import Layout from "../Layout";
const Products = () =>{
    const [products, setProducts] = useState([])
    const [productModel, setproductModel] = useState(false)
    const modelContainer = useRef(null)

    const handleModelClose = () =>{

    }
    return (
        <Layout>
            <div className=" m-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold mb-4">Products</h1>
                    <button className="bg-indigo-600 text-white rounded py-2 px-4" onClick={()=>setproductModel(true)}>
                       <i className="ri-sticky-note-add-line mr-2"></i>
                        New Product
                    </button>
                </div>
                
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

                {
                    productModel && 

                    <div ref={modelContainer} className= " animate__animated animate__fadeIn bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className= "animate__animated animate__zoomIn ani  bg-white w-6/12 py-5 px-6 rounded-md border border-1 relative">
                        <button className="absolute top-2 right-3" onClick={()=>handleModelClose()}>
                            <i className="ri-close-line text-lg"></i>
                        </button>
                        <h1>New Product</h1>
                        <form className="grid grid-cols-2 mt-4 gap-6">
                            <input 
                                required
                                placeholder="Enter title here"
                                type="text" 
                                name="title"
                                className="p-2 border border-gray-300 rounded col-span-2"
                            />
                            <input 
                                required
                                placeholder="Price"
                                type="number" 
                                name="price"
                                className="p-2 border border-gray-300 rounded"
                            />
                            <input 
                                required
                                placeholder="Discount"
                                type="number" 
                                name="discount"
                                className="p-2 border border-gray-300 rounded"
                            />
                            <textarea 
                              required
                              name="description"
                              placeholder="Description"
                              className="col-span-2 border border-gray-300 p-2 rounded"
                              rows={8}

                              />
                            
                            <div>
                                <button className="bg-indigo-600 rounded py-2 px-4 text-white">Submit</button>
                            </div>
                             
                        </form>

                    </div>
                   </div>
                }

               
            </div>
            
        </Layout>
        

    )
}

export default Products;