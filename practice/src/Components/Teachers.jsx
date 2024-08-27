import Nav from "./Nav";
import Footer from "./Footer";

const teachers = [
  {
    image: './teachers/a.jpg',
    name: 'Mr Willium',
    qua: 'MSC (Oxford University)'
  },
  {
    image: './teachers/b.jpg',
    name: 'Mr Rose',
    qua: 'BSC (Harvard University)'
  },
  {
    image: './teachers/c.jpg',
    name: 'Mr Allis',
    qua: 'BSC (YaleUniversity)'
  },
  {
    image: './teachers/d.jpg',
    name: 'Mr Bob',
    qua: 'BSC (Dhaka University)'
  },
  {
    image: './teachers/e.jpg',
    name: 'Mr Ricky',
    qua: 'MSC (Oxford University)'
  },
  {
    image: './teachers/f.jpg',
    name: 'Mr Willium',
    qua: 'mSC (Oxford University)'
  },
  {
    image: './teachers/g.gif',
    name: 'Mr Rose',
    qua: 'BSC (Harvard University)'
  },
  {
    image: './teachers/h.jpg',
    name: 'Mr Allis',
    qua: 'BSC (YaleUniversity)'
  },
  {
    image: './teachers/i.jpg',
    name: 'Mr Bob',
    qua: 'BSC (Dhaka University)'
  },
  {
    image: './teachers/j.jpg',
    name: 'Mr Ricky',
    qua: 'MSC (Oxford University)'
  },
  {
    image: './teachers/k.jpg',
    name: 'Mr Bob',
    qua: 'BSC (Dhaka University)'
  },
  {
    image: './teachers/l.jpg',
    name: 'Mr Ricky',
    qua: 'MSC (Oxford University)'
  }
]
const Teachers = ()=>{
    return(
        <>
          <Nav/>
          <div>
              <header style={{
                height: 280,
                backgroundImage: 'radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )',
                display: "flex",
                justifyContent: 'center',
                alignContent: 'center'
                }}>
                  <h1 style={{
                    fontSize: 60,
                    color: 'white'
                  }}>
                    <i className="ri-user-voice-line" style={{marginRight: 16}}></i>
                    Teachers
                  </h1>
              </header>
              <section style={{
                width: '80%',
                margin: '0 auto',
                padding: '80px 0',
                display: 'flex',
                columnGap: '5%',
                rowGap: 48,
                flexWrap: 'wrap'
              }}>
                
                {
                  teachers.map((teacher,index)=>{
                    return (
                      <div style={{width: '20%'}} key={index}>
                        <img src={teacher.image} width="100%" />
                        <h2 style={{padding: 0,marginBottom: 4}}>{teacher.name}</h2>
                        <p style={{padding: 0,margin: 0, color: 'gray'}}>{teacher.qua}</p>
                      </div>
                    )
                  })
                }

                
              </section>
          </div>
          <Footer/>
        </>
        
    )
}

export default Teachers;