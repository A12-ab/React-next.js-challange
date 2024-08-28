import Nav from './Nav';
import Footer from './Footer'
const Home = ()=>{
    return(
        <>
          <Nav/>
          <div>
            <header className='grid md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated animate__fadeIn'>
              
              <img className='w-3/4 rounded-full animate__animated animate__pulse border-2 shadow-xl' src="./images/pic1.jpg"/>
              <div className='flex flex-col gap-6 justify-center'>
                <h1 className='text-7xl font-bold text-white'>Say Hello ! Coding School</h1>
                <p className='text-2xl font-semibold'>Enjoy complete digital learning</p>
                <div className='flex gap-6'>
                  <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-orange-600'>Learn More</button>
                  <button className='border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Video</button>
                </div>
              </div>
            </header>

            <div className='p-24'>
              <h1 className='text-center text-4xl text-bold'>Benefits and Advantages</h1>
              <p className='text-gray-600 text-center mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sapiente nemo, totam soluta voluptatem facilis dolores provident est odit necessitatibus eum quisquam sequi reiciendis explicabo fugiat animi consectetur, corrupti eveniet!</p>
                <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>
                   <div className='shadow-lg border rounded-md p-4 text-center'>
                       <i className='ri-artboard-line text-6xl'></i>
                       <h1 className='text-2xl font-semibold mb-2'>Great faculty</h1>
                       <p className='text-gray-600'>lorem sf;oknsdlnlkn nsdlkfknld ldfldknfldk dkfndkn dkfdfknd</p>
                   </div>

                   <div className='shadow-lg border rounded-md p-4 text-center'>
                      <i className="ri-edit-box-line text-6xl"></i>
                       <h1 className='text-2xl font-semibold mb-2'>Latest Curriculumn</h1>
                       <p className='text-gray-600'>lorem sf;oknsdlnlkn nsdlkfknld ldfldknfldk dkfndkn dkfdfknd</p>
                   </div>

                   <div className='shadow-lg border rounded-md p-4 text-center'>
                       <i className="ri-tree-fill text-6xl"></i>
                       <h1 className='text-2xl font-semibold mb-2'>Green Environment</h1>
                       <p className='text-gray-600'>lorem sf;oknsdlnlkn nsdlkfknld ldfldknfldk dkfndkn dkfdfknd</p>
                   </div>

                </div>
            </div>

            
          </div>
          
          <Footer/>
        </>
       
    )
}

export default Home;