import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import './App.css'
const App = ()=>{

  const model = {
    fullname: '',
    class: '',
    roll: '',
    subject: '',
    dob: ''
  }
  const [right, setRight] = useState(-450);
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState(model)

  const handleInput =(e)=>{
    const Input = e.target;
    const value = Input.value;
    const key = Input.name;

    setForm({
      ...form,
      [key] : value
    })
    
  }

  const createStudent = (e)=>{
    e.preventDefault();
    //console.log(form)
    setStudents([
      ...students,
       form
    ])

    setForm(model)

    setRight(-450)
  }

  const deleteStudent = (index) =>{
    const backup = [...students];
    backup.splice(index, 1);
    setStudents(backup);

  }
  const handleDrawer = ()=>{
    setRight(0)
  }

  const editStudent = (index)=>{
    //alert(index)
    setRight(0);
    setForm(students[index]);
    setEditIndex(index);
  }

  const saveStudent = (e) =>{
    //alert("save request")
    e.preventDefault();
    const backUp = [...students];
    backUp[editIndex] = form;
    setStudents(backUp);
    setRight(-450)
    setEditIndex(null);
    setForm(model)

  }
  return(
    <div style={{
      background: '#ddd',
      minHeight: '100vh'
    }}>
      <div style={{
        width: '70%',
        background: 'white',
        margin: '32px auto',
        padding: 32
      }}>
        <h1 style={{
          padding: 0,
          margin: 0,
          textAlign: 'center'
        }}>CodingOtt</h1>
        <button 
          onClick={handleDrawer}
          style={{
            border: 'none',
            background: '#8407ba',
            color: 'white',
            padding: '14px 24px',
            borderRadius: 4,
            fontSize: 16,
            margin: '20px 0'
          }}>
          <i className="ri-user-add-line" style={{marginRight: 8}}></i>
          New Student
        </button>

        <table className='crud-app'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Students name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Roll</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              students.map((student, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{student.fullname}</td>
                <td>{student.class}</td>
                <td>{student.roll}</td>
                <td>{student.subject}</td>
                <td>{student.dob}</td>
                <td>
                  <div>
                  <button 
                    onClick={()=>{editStudent(index)}}
                    style={{
                    border: 'none',
                    width: 32,
                    height: 32,
                    background: '#07c65d',
                    color: 'white',
                    borderRadius: 4,
                    marginRight: 8
                  }}>
                  <i className="ri-image-edit-line"></i>
                  </button>

                  <button 
                    onClick={()=>{deleteStudent(index)}}
                    style={{
                    border: 'none',
                    width: 32,
                    height: 32,
                    background: 'red',
                    color: 'white',
                    borderRadius: 4
                  }}>
                  <i className="ri-delete-bin-6-line"></i>
                  </button>

                  
                  </div>
                </td>
              </tr> 
              ))
            }
            


          </tbody>
        </table>
      </div>

      <aside style={{
        position: 'fixed',
        top: 0,
        right: right,
        width: 450,
        background: 'white',
        height: '100%',
        boxShadow: '0 0 40px rgba(0,0,0,0.2)',
        padding: 32,
        boxSizing: 'border-box',
        transition: '0.3s'
      }}>
        <button 
          onClick={()=>setRight(-450)}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: 18,
            color: '#8407ba',
            position: 'absolute',
            top: 20,
            right: 20
          }}>
          <i className="ri-close-circle-line"></i>
        </button>
        
        <h1>New Student</h1>
        <form 
          onSubmit={editIndex === null ? createStudent: saveStudent}
          style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
          <input
               value={form.fullname}
               onChange={handleInput}
               required
               type='text'
               name='fullname'
               placeholder='Enter your fullname'
               style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
               }}

          />

          <input
               value={form.class}
               onChange={handleInput}
               required
               type='text'
               name='class'
               placeholder='Enter your Class Name'
               style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
               }}

          />

          <input
               value={form.roll}
               onChange={handleInput}
               required
               type='number'
               name='roll'
               placeholder='Enter your Roll Number'
               style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
               }}

          />

          <input
               value={form.subject}
               onChange={handleInput}
               required
               type='text'
               name='subject'
               placeholder='Enter your Subject Name'
               style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
               }}

          />

          <input
               value={form.dob}
               onChange={handleInput}
               required
               type='date'
               name='dob'
               placeholder='Enter date'
               style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
               }}

          />

          {
            editIndex === null ? 

            <button style={{
            border: 'none',
            background: '#8407BA',
            color: 'white',
            fontSize: 16,
            padding: '14px 0',
            borderRadius: 4
          }}>SUBMIT</button>

          :

          <button style={{
            border: 'none',
            background: 'deeppink',
            color: 'white',
            fontSize: 16,
            padding: '14px 0',
            borderRadius: 4
          }}>SAVE</button>

          }

          
          
        </form>
      </aside>
    </div>
  )
}

export default App;