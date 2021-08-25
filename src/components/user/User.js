import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";

export default function User({item}) {
    return (
        <Router>
        <div className="User">
            {item.name} - <Link to={'/users/' + item.id}>User details</Link>
        </div>
        </Router>
    );
}

