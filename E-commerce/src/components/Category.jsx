import { useState } from "react";
import Layout from "./Layout";
const Category = ()=>{
    const [category, setCategory] = useState([
        {
            title: 'Bed set',

        },
        {
            title: 'Sofa set'
        },
        {
            title: 'Dinning table'
        },
        {
            title: 'Doors'
        },
        {
            title: 'Almirah'
        },
        {
            title: 'Reading table'
        },
        {
            title: 'TV set'
        },
        {
            title: 'show case'
        }
    ])
    return(
        <div>
            <Layout>
                <div className="md:p-16 p-8">
                    <div className="md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8"> 
                         {
                            category.map((item,index)=>(
                                <div key={index} className="hover:bg-orange-600 hover:text-white border rounded-lg bg-white shadow-lg flex flex-col p-8 justify-center items-center">
                                    <i className="ri-menu-search-line text-6xl"></i>
                                    <h1 className="text-3xl font-bold">{item.title}</h1>
                                </div>

                            ))
                         }

                    </div>
                </div>
            </Layout>
            
        </div>
    )
}
export default Category;