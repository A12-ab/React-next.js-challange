import Nav from "./Nav";
import Footer from "./Footer";
const Holidays = ()=>{

  const holidays = [
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
    {
      title: 'Summer Vacation 2024',
      duration: '1 Months',
      date: '10--3-2024'
    },
  ]
    return(
        <>
          <Nav/>
           <div style={{
              width: '60%',
              margin: '0 auto',
              padding: '64px 0'
           }}>
                <h1 style={{
                  textAlign: 'center',
                }}>Your Holidays</h1>
                <table width="100%">
                       <thead>
                              <tr style={{
                                background: '#ddd'
                              }}>
                                  <th style={{padding: 14}}>S/No</th>
                                  <th>Title</th>
                                  <th>Duration</th>
                                  <th>Date</th>
                              </tr>
                       </thead>
                       <tbody>
                             {
                              holidays.map((item, index)=>(
                                <tr style={{ textAlign: 'center'}} key={index}>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{index+1}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.title}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.duration}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.date}</td>
                                </tr>
                              ))
                             }
                       </tbody>
                </table>
           </div>
          <Footer/>
        </>
        
    )
}
export default Holidays;