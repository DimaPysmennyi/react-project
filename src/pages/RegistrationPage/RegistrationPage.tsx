import { useForm } from "react-hook-form";
import './RegistrationPage.css';

interface IForm{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export function RegistrationPage(){
    const {register, handleSubmit, watch, formState} = useForm<IForm>({
        mode: "onSubmit",
    })

    async function onSubmit(data: IForm){
        console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" {...register('name', {
                    required: {value: true, message: 'Name is required'},
                    minLength: {value: 6, message: 'Name should be at least 6 symbols'}
                })} />
                <p>{formState.errors.name?.message}</p>

                <input type="email" placeholder="E-mail" {...register('email', {
                    required: {value: true, message: 'E-mail is required'}
                })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password" placeholder="Password" {...register('password', {
                    required: {value: true, message: 'Password is required'}
                })}/>
                <p>{formState.errors.password?.message}</p>

                <input type="confirmPassword" placeholder="Confirm Password" {...register('confirmPassword', {
                    required: {value: true, message: 'Confirm Your Password'},
                    validate: (value: string) => {
                        if (watch("password") != value){
                            return 'Passwords do not match!'
                        }
                    }
                })}/>
                <p>{formState.errors.confirmPassword?.message}</p>

                <button type="submit">Register</button>

            </form>
        </div>
    )
}