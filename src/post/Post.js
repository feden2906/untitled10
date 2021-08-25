import {useEffect, useState} from "react";
import {getPosts} from "../service/Service";

export default function Post({ match: {params: {id}}}) {
    let [post, setPost] = useState({})
    useEffect(() => {
        getPosts(id).then(value => setPost({...value}));
    }, [id])
    return (

        <div className="Post">
            {
                JSON.stringify(post)
            }
        </div>

    );
}
