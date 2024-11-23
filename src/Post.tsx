interface IProps{
    headline: string,
    desc: string,
    src: string,
    author: string
}

export function Post(props: IProps){
    return (
        <div>
            <h1>{props.headline}</h1>
            <p>{props.desc}</p>
            <img width="500px" height="300px" src={props.src} alt="" />
            <p>{props.author}</p>
        </div>
    )
}