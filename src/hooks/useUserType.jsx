import {  useEffect, useState } from 'react';

const useUserType = (email) => {
    const [userType,setUserType]=useState()
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                //result from server was in a data{}
                setUserType(data.data.userType)  
                setLoading(false)
            })   

        }

    },[email])
    return [userType,loading]
};

export default useUserType;