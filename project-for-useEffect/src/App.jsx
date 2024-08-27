import { useState, useEffect } from "react";
import axios from 'axios';
const App = ()=>{

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(()=>{
      test();
    },[])

    const test = async () =>{
      try{
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = await response.data;
        //console.log(data);
        setPhotos(data);

      }catch(err){
        console.log("my error is ", err);
      }
      finally{
        setLoading(false);
      }
      
      
    }
  return(
    <div>
      <h1>Aimers</h1>
      <button onClick={test}>Test</button>
       { loading && <h1>Loading...</h1>}
      <div style={{
        margin: '50px auto',
        width: '90%',
        display: 'flex',
        gap: 48,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>

            {
              photos.map((item, index)=>(
                <div key={index} style={{
                  width: 'calc(25% - 48px)',
                  border: '1px solid #ccc',
                  padding: 16,
                  boxSizing: 'border-box',
                  borderRadius: 8,
                  boxShadow: '0 0 8px #ddd',
                  textAlign: 'center'
                }}>
                  <img src={item.image} width="180"/>
                  <h4 style={{padding: 0, marginBottom: 6}}>{item.title}</h4>
                  <p style={{color: 'gray', padding:0, marginBottom: 2}}>{item.description.slice(0,75)}</p>
                  <p style={{textTransform: 'capitalize', padding: 0, margin: 0}}>{item.category}</p>

                </div>
              ))
            }

          </div>
        

      </div>
    
  )
}

export default App;