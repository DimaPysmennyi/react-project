import { useForm } from "react-hook-form";
import './LoginPage.css';

interface IForm{
    email: string,
    password: string
}

export function LoginPage(){
    const {register, handleSubmit, formState} = useForm<IForm>({
        mode: "onSubmit",
    })

    async function onSubmit(data: IForm){
        await fetch('http://localhost:8000/api/user/login/', {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="E-mail" {...register('email', {
                    required: {value: true, message: 'E-mail is required'}
                })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password" placeholder="Password" {...register('password', {
                    required: {value: true, message: 'Password is required'}
                })}/>
                <p>{formState.errors.password?.message}</p>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}