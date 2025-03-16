import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContextProvider";
import './ProfilePage.css';

export function ProfilePage(){
    const {isAuthenticated, user} = useUserContext();

    const loggedIn = isAuthenticated();
    if (loggedIn){
        return (
            <div className="profile-div">
                <h1>{user?.username}</h1>
                <p>{user?.email}</p>
            </div>
        )
    } 

    return (
        <Link to='/login'></Link>
    )

}