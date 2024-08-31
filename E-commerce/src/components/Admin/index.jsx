const Admin = () =>{
    return(
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <img src="/images/xx.svg" className="w-96 h-96"/>
            <div>
                <h1 className="text-4xl font-semibold mb-4">Admin Console</h1>
                <form className="flex flex-col gap-4">
                    <input
                        required
                        type="text"
                        className="border p-4 bg-white rounded-md w-[450px]"
                        placeholder="Enter admin secret"
                    />
                    <button className="py-3 px-6 bg-violet-600 w-fit font-semibold rounded-md text-white">Access Now</button>
                </form>
            </div>
        </div>
    )
}
export default Admin;