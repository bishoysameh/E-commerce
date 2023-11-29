import { useEffect , useState } from "react";



const UseFetch = (url) => {

const [data , setData] = useState(null);
const [error , setError] = useState(null);


useEffect (()=>{


    setTimeout(()=>{
    fetch(url)
   
    .then ((res) => {
        if(res.ok !== true){
            throw Error ('sorry cant fetch data ');
        }
        return res.json();
        })
        .then((data)=> {
            setData(data);
            setError(null);
        })
        .catch(err =>{
            console.log(err.message);
            setError(err.message);
        })
    },1000)
},[url])


return {data , error}
}

export default UseFetch;
