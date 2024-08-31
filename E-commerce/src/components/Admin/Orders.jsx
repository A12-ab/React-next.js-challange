import { useState } from "react";
import Layout from "./Layout";
const Orders = ()=>{
    const [orders, setOrders] = useState([
        
        {
            orderId: '#fgf44',
            customername: 'abid',
            email: 'abid@gmail.com',
            mobile: '014255485',
            product: 'iphone 7',
            amount: 500000,
            date: '12-10-2024',
            status: 'pending'
        }   
       
    ])
    return(
        <Layout>
            <div className="m-8">
                <h1 className="text-xl font-semibold">Orders</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white">
                                <th className="py-4">orderId</th>
                                <th>CustomersName</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item,index)=>(
                                    <tr className="text-center" key={index} style={{
                                        background: (index+1)%2===0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td>{item.orderId}</td>
                                        <td className="capitalize">{item.customername}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className="capitalize">{item.product}</td>
                                        <td>৳{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
                                        <td className="capitalize">
                                            <select className="border p-1 border-gray-300">
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
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

export default Orders;