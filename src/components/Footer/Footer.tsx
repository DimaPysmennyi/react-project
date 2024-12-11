import './Footer.css';
import { Link } from 'react-router-dom';
export function Footer(){
    return (
        <footer>
            <Link className="link" to='/'>Main</Link>
            <Link className="link" to="#">Profile</Link>
            <Link className="link" to="/posts">My Posts</Link>
        </footer>
    )
}