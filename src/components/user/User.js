import {
    BrowserRouter as Router,

} from "react-router-dom";
import {useState} from "react";
import {getPosts} from "../../service/Service";
import Posts from "../posts/Posts";

export default function User({item, history}) {
    let [posts, setPosts] = useState([]);

    const navigate = () => {
        history.push('/users/' + item.id, item)
        getPosts(item.id).then(data => setPosts(data))

    }
    return (
        <Router>
            <div className="User">
                {item.name} - <button onClick={navigate}>Details</button>
            </div>
        </Router>
    );
}

