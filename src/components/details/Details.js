import {useEffect, useState} from "react";
import {getUser} from "../../service/Service";
import { Link } from "react-router-dom";

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
            <Link to={{pathname: '/users/' + id + '/posts'}}>Show all
                info</Link>
        </div>
    );
}
