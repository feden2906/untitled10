import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../service/Service";
import {Route, Switch} from "react-router-dom";
import Details from "../details/Details";
import Post from "../../post/Post";
import Posts from "../posts/Posts";

export default function Users(props) {
    let [users, setUsers] = useState([]);
    let {match: {url}, history} = props;


    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [])

    return (
        <div className="Users">
            {
                users.map(usersItem => <User history={history} key={usersItem.id} item={usersItem}/>)
            }
          <Route exact path={`${url}/:id`} render={(props) => {
            return <Details {...props}/>
          }}/>

            <Route path={`${url}/:id/posts`} render={(props) => {
                return <Posts {...props}/>
            }}/>
              <Route path={`${url}/:id/posts/:postId`} render={(props) => {
                return <Post {...props}/>
              }}/>

        </div>
    );
}

