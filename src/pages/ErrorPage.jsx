import { useRouteError,NavLink,useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    const navigate=useNavigate()
    // console.log(navigate);
    const handleGoBack=()=>{
    // navigate("/")
      navigate(-1);
    // navigate("/contact", { state: { key: "value" } });
    }

    return (
        <>
            {error.status === 404 ? (
                <figure>
                    <img
                        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
                        alt="404 Error"
                    />
                </figure>
            ) : (
                <h1>Page does not exist</h1>
            )}
           
           <br></br>
           <button onClick={handleGoBack} style={{backgroundColor:"blueviolet",color:"whitesmoke",textDecoration:"none", borderRadius:"50px", height:"60px",width:"200px"}}> 
        
           Go Back</button>
        </>
    );
};
