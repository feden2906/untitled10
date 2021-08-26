import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";
import { getPosts, getUser } from "../../service/Service";
import { useEffect, useState } from "react";

export default function Posts({ match: {params: {id}}}) {
  let [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(id).then(value => setPosts([...value]));
  }, [id])

    return (
            <div className="Posts">
                <ul>
                  {
                    posts.map(item => <li key={item.id}>{item.title} <Link to={{pathname: '/users/' + id + '/posts/' + item.id}}>Show all info</Link></li>)
                  }
                </ul>
            </div>
    );
}
