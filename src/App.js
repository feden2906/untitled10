import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Link to={'/users'}>Users page</Link>
            </div>
            <Route path={'/users'} component={Users}/>

        </Router>
    );
}

