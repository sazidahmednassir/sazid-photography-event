import { useEffect, useState } from "react";

const useToken=(user, email)=>{
    const [token, setToken] = useState('');
    useEffect(()=>{

    }, [user])
    return [token]
}

export default useToken;