import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";

export default function Posts({item, history}) {

    const positive = () => {
        history.push('/users/' + item.id + '/posts', item)
    }

    return (
        <Router>
            <div className="Posts">
                <ul>
                    <li>{item.title} <Link onClick={positive} to={{pathname: '/users/' + item.id + '/posts'}}>Show all
                        info</Link></li>
                </ul>
            </div>
        </Router>
    );
}
