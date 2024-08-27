const NotFound = () =>{
    return(
        <div style={{
            background: '#f5f5f5',
            display: "flex",
            flexDirection:"column",
            height: '100vh',
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <img src="./images/NotFound.svg" alt="image"/>
            <h1 style={{
                color: "#6C63FF"
            }}>404 | Not Found</h1>
        </div>
        
    )
}
export default NotFound;