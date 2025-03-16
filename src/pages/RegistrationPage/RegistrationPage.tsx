import { useForm } from "react-hook-form";
import './RegistrationPage.css';
import { useUserContext } from "../../context/userContextProvider";

interface IForm{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export function RegistrationPage(){
    const {register: userRegister, handleSubmit, watch, formState} = useForm<IForm>({
        mode: "onSubmit",
    })

    const {register} = useUserContext();

    async function onSubmit(data: IForm){
        register(data.email, data.name, data.password);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" {...userRegister('name', {
                    required: {value: true, message: 'Name is required'},
                    minLength: {value: 6, message: 'Name should be at least 6 symbols'}
                })} />
                <p>{formState.errors.name?.message}</p>

                <input type="email" placeholder="E-mail" {...userRegister('email', {
                    required: {value: true, message: 'E-mail is required'}
                })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password" placeholder="Password" {...userRegister('password', {
                    required: {value: true, message: 'Password is required'}
                })}/>
                <p>{formState.errors.password?.message}</p>

                <input type="password" placeholder="Confirm Password" {...userRegister('confirmPassword', {
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