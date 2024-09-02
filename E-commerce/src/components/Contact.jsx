
import Layout from "./Layout";
const Contact = ()=>{

    return(
        <Layout>
            <div>
                <header className="md:w-6/12 mx-auto md:my-16 md:shadow-lg bg-white border">
                    <img src="/images/contact-us.jpg" className="w-full"/>
                    <div className="p-8">

            <form className=" space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="p-3 border border-gray-300 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="example@gmail.com"
                      className="p-3 border border-gray-300 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Message</label>
                    <textarea 
                      required
                      type="text" 
                      placeholder="Write your message here"
                      className="p-3 border border-gray-300 rounded"
                      rows={4}
                    />
                </div>



               <button className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600">Login</button>

            </form>

                    </div>
                </header>
            </div>
        </Layout>
    )
}
export default Contact;