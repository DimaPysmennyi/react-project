import './Header.css'

export function Header(){
    return (
        <header>
            <div className='links'>
                <a href="#">Main</a>
                <a href="#">Profile</a>
                <a href="#">My Posts</a>
            </div>
            <button className="create-button">+ Create</button>
        </header>
    )
}