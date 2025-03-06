import './Header.css';
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <header>
            <div className='links'>
                <Link className="link" to='/'>Main</Link>
                <Link className="link" to="#">Profile</Link>
                <Link className="link" to="/posts">My Posts</Link>
            </div>
            {/* - */}
            <button className="create-button">+ Create</button>
        </header>
    )
}