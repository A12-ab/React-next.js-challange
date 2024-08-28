import 'animate.css';
import { useState } from 'react';
const App = () =>{
  const model = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    mobile: ''
  }

  const errModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    username: null,
    mobile: null
  }

  const [form, setForm] = useState(model);
  const [formError, setFormerror] = useState(errModel);

  const validator = (key, value)=>{
    if(!value.length){
      setFormerror({
        ...formError,
        [key]: `${key} is required`
      })
    }else{
      setFormerror({
        ...formError,
        [key] : null
      })
    }

  }

  const getFormValue = (e)=>{
    const input = e.target
    const value = input.value
    const key=input.name

    setForm({
      ...form,
      [key]: value
    })
    validator(key, value);
    
  }

  const signUp = (e)=>{
    e.preventDefault();
    const keys = Object.keys(form);
    for(let key of keys){
      let value = form[key];
      console.log(value);
      validator(key, value);

    }

  }
  return(
    <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
      <div className='bg-white px-8 py-6 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Aimers SignUp Form</h1>
        <form onSubmit={signUp} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>FirstName</label>
            <input type="text" name='firstname' placeholder='Enter your First name'
            className='border p-2 rounded border-gray-300' onChange={getFormValue}/>
            {formError.firstname && <small className='text-rose-600 font-semibold text-sm'>{formError.firstname}</small>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>LasttName</label>
            <input type="text" name='lastname' placeholder='Enter your Last name'
            className='border p-2 rounded border-gray-300'
            onChange={getFormValue}/>
            {formError.lastname && <small className='text-rose-600 font-semibold text-sm'>{formError.lastname}</small>}
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Email</label>
            <input type="email" name='email' placeholder='example@gmail.com'
            className='border p-2 rounded border-gray-300'
            onChange={getFormValue}/>
            {formError.email && <small className='text-rose-600 font-semibold text-sm'>{formError.email}</small>}
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Password</label>
            <input type="password" name='password' placeholder='password'
            className='border p-2 rounded border-gray-300'
            onChange={getFormValue}/>
            {formError.password && <small className='text-rose-600 font-semibold text-sm'>{formError.password}</small>}
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>UserName</label>
            <input type="text" name='username' placeholder='Enter your User name'
            className='border p-2 rounded border-gray-300' onChange={getFormValue}/>
            {formError.username && <small className='text-rose-600 font-semibold text-sm'>{formError.username}</small>}
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Contact</label>
            <input type="number" name='number' placeholder='Enter your Mobile number'
            className='border p-2 rounded border-gray-300' onChange={getFormValue}/>
            {formError.number && <small className='text-rose-600 font-semibold text-sm'>{formError.number}</small>}
          </div>

          <button className='border-0 bg-indigo-600 text-white rounded py-2 font-semibold'>SUBMIT</button>
        </form>
      </div>
    </div>

  )
}

export default App;