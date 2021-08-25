import {useEffect, useState} from "react";
import {getUser} from "../../service/Service";

export default function Details({match:{params:{id}}}) {
    let [user,setUser] = useState({})

useEffect(()=>{
    getUser(id).then(value => setUser({...value}));
},[id])
    return (
        <div className="Details">
            {
            JSON.stringify(user)
            }
        </div>
    );
}
