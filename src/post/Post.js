import {useEffect, useState} from "react";
import {getPost} from "../service/Service";

export default function Post({ match: {params: {postId}}}) {
    let [post, setPost] = useState({})
    useEffect(() => {

        getPost(postId).then(value => setPost({...value}));
    }, [postId])
    return (

        <div className="Post">
            {
                JSON.stringify(post)
            }
        </div>

    );
}
