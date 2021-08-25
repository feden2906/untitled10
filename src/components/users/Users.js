import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../service/Service";
import {Route} from "react-router-dom";
import Details from "../details/Details";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [])

    return (
        <div className="Users">
            {
                users.map(UsersItem => <User key={UsersItem.id} item={UsersItem}/>)
            }

            <Route path={'/users/:id'} render={() => {
                return <Details/>
            }}/>
        </div>
    );
}

