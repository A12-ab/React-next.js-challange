import { useState, useEffect } from "react";
import Layout from "../Layout";
import firebaseAppConfig from '../../../utils/firebase-config.js'
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import uploadFile from "../../../utils/Storage.js";

const db = getFirestore(firebaseAppConfig)

const Products = () =>{
    const [updateUi, setUpdateUi] = useState(false);
    const model= {
        title: '',
        description: '',
        price: '',
        discount: ''
    }
    
    const [productForm, setProductForm ] = useState(model);
    const [products, setProducts] = useState([])
    const [productModel, setproductModel] = useState(false);
    const [applyCloseAnimation, setApplyCloseAnimation] = useState(false);
    const [edit, setEdit] = useState(null);

    const handleModelClose = () =>{
        setApplyCloseAnimation(true);
        setTimeout(()=>{
            setproductModel(false);
        },700)
    }
    const handleModelOpen = ()=>{
        setApplyCloseAnimation(false);
        setproductModel(true);
    }
    useEffect(()=>{
        const req = async()=>{
            const snapshot =await getDocs(collection(db, "products"));
            const tmp = [];
            snapshot.forEach((doc)=>{
                const allProducts = doc.data();
                allProducts.id = doc.id;
                tmp.push(allProducts);

            })
            setProducts(tmp)
        }
        req();
    },[updateUi])

    const handleProductForm = (e)=>{
        const input = e.target;
        const name = input.name 
        const value = input.value 
        setProductForm({
            ...productForm,
            [name]: value
        })
    }

    const createProduct = async(e)=>{
        try{
            e.preventDefault()
            await addDoc(collection(db, "products"), productForm)
            setProductForm(model);
            handleModelClose()
            setUpdateUi(!updateUi)
            new Swal({
                icon: 'success',
                title: 'Product Added'
            })
            
        }
        catch(err)
        {
            new Swal ({
                icon: 'error',
                title: 'Failed !',
                text: err.message
            })
        }
    }

    const uploadProductImage = async(e, id)=>{
        const input = e.target;
        const file = input.files[0];
        const path = `products/${Date.now()}.png`
        const url = await uploadFile(file, path);
        const ref = doc(db, "products", id);
       await updateDoc(ref, {image: url})
        setUpdateUi(!updateUi)
        
    }

    const deleteProduct = async(id)=>{
        try{
            const ref = await doc(db, "products", id)
            deleteDoc(ref)
            setUpdateUi(!updateUi)
        }
        catch(err)
        {
            new Swal({
                icon: 'error',
                title: err.message
            })
        }

    }

    const editProduct = (item)=>{
        setEdit(item)
        setProductForm(item)
        setproductModel(true)

    }

    const saveData = async(e)=>{
        try{
            e.preventDefault()
            const ref = doc(db, "products", edit.id)
            await updateDoc(ref, productForm);
            setProductForm(model);
            setproductModel(false);
            setEdit(null)
            setUpdateUi(!updateUi);

        }
        catch(err)
        {
            new Swal({
                icon: 'error',
                title: err.message
            })
        }
    }
    return (
        <Layout>
            <div className=" m-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold mb-4">Products</h1>
                    <button className="bg-indigo-600 text-white rounded py-2 px-4" onClick={handleModelOpen}>
                       <i className="ri-sticky-note-add-line mr-2"></i>
                        New Product
                    </button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 px-8 mt-8">
                {
                    products.map((item, index)=>(
                        <div key={index} className="bg-white shadow-lg rounded-md">
                            <div className="relative">
                                <img 
                                   src = {item.image ? item.image : "/images/a.jpg"} 
                                   className="rounded-t-md h-[250px] w-full object-cover"
                                />
                                <input 
                                   onChange={(e)=>uploadProductImage(e,item.id)}
                                   type="file" 
                                   className="opacity-0 w-full h-full absolute top-0 left-0"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between">
                                    <h1 className="text-md capitalize text-lg font-semibold">{item.title}</h1>
                                    <div className="space-x-2">
                                        <button onClick={()=>editProduct(item)}>
                                            <i className="ri-edit-box-line text-violet-600"></i>
                                        </button>
                                        <button onClick={()=> deleteProduct(item.id)}>
                                            <i className="ri-delete-bin-6-line text-rose-600"></i>
                                        </button>
                                        
                                    </div>
                                </div>
                                
                                
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

                    <div className= {`animate__animated ${applyCloseAnimation ? 'animate__fadeOut' : 'animate__fadeIn'} bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center`}>
                    <div className= {`animate__animated ${applyCloseAnimation ? 'animate__zoomOut' : 'animate__zoomIn '} animate__faster   bg-white w-6/12 py-5 px-6 rounded-md border border-1 relative`}>
                        <button className="absolute top-2 right-3" onClick={handleModelClose}>
                            <i className="ri-close-line text-lg"></i>
                        </button>
                        <h1>New Product</h1>
                        <form className="grid grid-cols-2 mt-4 gap-6" onSubmit={edit ? saveData : createProduct}>
                            <input 
                                required
                                placeholder="Enter title here"
                                type="text" 
                                name="title"
                                value={productForm.title}
                                className="p-2 border border-gray-300 rounded col-span-2"
                                onChange={handleProductForm}
                            />
                            <input 
                                required
                                placeholder="Price"
                                type="number" 
                                name="price"
                                value={productForm.price}
                                onChange={handleProductForm}
                                className="p-2 border border-gray-300 rounded"
                            />
                            <input 
                                required
                                placeholder="Discount"
                                type="number" 
                                name="discount"
                                value={productForm.discount}
                                onChange={handleProductForm}
                                className="p-2 border border-gray-300 rounded"
                            />
                            <textarea 
                              required
                              name="description"
                              placeholder="Description"
                              onChange={handleProductForm}
                              className="col-span-2 border border-gray-300 p-2 rounded"
                              rows={8}
                              value={productForm.description}

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