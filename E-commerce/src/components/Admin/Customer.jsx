import { useState } from "react";
import Layout from "./Layout";
const Customers = ()=>{
    const [customers, setcustomers] = useState([
        
        {
            customername: 'abid',
            email: 'abid@gmail.com',
            mobile: '014255485',
            date: '12-10-2024',
        }   
       
    ])
    return(
        <Layout>
            <div className="m-8">
                <h1 className="text-xl font-semibold">Customers</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="p-4">CustomersName</th>
                                <th>Email</th>
                                <th>Mobile</th> 
                                <th>Date</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((item,index)=>(
                                    <tr className="text-center" key={index} style={{
                                        background: (index+1)%2===0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className="capitalize px-4 py-2">
                                            <div className="flex gap-3 items-center">
                                                <img src="/images/my_photo.jpg" className="w-10 h-10 rounded-full"/>
                                                <div className="flex flex-col justify-center">
                                                   <span className="font-semibold">{item.customername} </span>
                                                   <small className="text-gray-500">{item.date}</small>
                                                </div>
                                                
                                            </div>
                                            
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
        
    )
}

export default Customers;