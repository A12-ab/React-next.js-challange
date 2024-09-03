import Layout from "./Layout";
const Profile = ()=>{
    return(
        <Layout>
             <div className="md:my-16 mx-auto md:w-7/12 bg-white shadow-lg border rounded-md p-8">
                <div className="flex items-center gap-4">
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Profile</h1>
                </div>
                <hr className="my-6"/>

                <div className="w-24 h-24 mx-auto relative mb-6 ">
                    <img src="/images/my_photo.jpg" className="w-24 h-24 mx-auto rounded-full"/>
                    <input type="file" accept="images/*" className=" opacity-0 absolute top-0 left-0 w-full h-full"/>
                </div>

                

                <form className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Fullname</label>
                        <input 
                            required
                            name="fullname"
                            type="text"
                            className="p-2 rounded border border-gray-300"
                            value="abid saharia"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Email</label>
                        <input 
                            name="email"
                            type="email"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="abidsaharia@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Mobile</label>
                        <input 
                            name="mobile"
                            type="number"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="01787382932"
                        />
                    </div>
                    <div/>

                    <div className="flex flex-col gap-2 col-span-2">
                        <label className="text-lg font-semibold">Adress</label>
                        <input 
                            name="adress"
                            type="text"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="pakuria, turag, uttara, dhaka"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Post</label>
                        <input 
                            name="post"
                            type="text"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="Uttara"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">city</label>
                        <input 
                            name="city"
                            type="text"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="Dhaka"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Country</label>
                        <input 
                            name="country"
                            type="text"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="Bangladesh"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold">Pincode</label>
                        <input 
                            name="pincode"
                            type="number"
                            required
                            className="p-2 rounded border border-gray-300"
                            value="1230"
                        />
                    </div>

                    <button className="px-4 py-2 bg-rose-500 rounded text-white w-fit hover:bg-green-600">
                       <i className="ri-save-line mr-2"></i>
                        Save
                    </button>

                    
                </form>
                
            </div>
        </Layout>
        
    )
}
export default Profile;