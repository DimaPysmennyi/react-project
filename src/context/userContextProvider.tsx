import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface IUser{
    id: number,
    username: string,
    email: string,
    role: string,
}

interface IUserContext{
    user: IUser | null,
    register: (email: string, username: string, password: string) => void,
    login: (email: string, password: string) => void,
    isAuthenticated: () => boolean
}

const initialValue: IUserContext = {
    user: null,
    register: (email: string, username: string, password: string) => {},
    login: (email: string, password: string) => {},
    isAuthenticated: () => false,
}

const userContext = createContext(initialValue);

export function useUserContext(){
    return useContext(userContext);
}

interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<IUser | null>(null);

    async function getData(token: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/me', {
                headers: {'authorization': `Bearer ${token}`},
            })
            const result = await response.json();
            if (result.error){
                return;
            }
            console.log(result)
            setUser(result.data)
        } catch (error){
            console.log(error);
        }
    }

    async function register(email: string, username: string, password: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            console.log(result)
            if (result.status == "error"){
                return; 
            }

            getData(result.data);
            localStorage.setItem('token', result.data);

        } catch(error){
            console.log(error);
        }
    }

    async function login(email: string, password: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            if (result.status == "error"){
                return; 
            }

            getData(result.data);
            localStorage.setItem('token', result.data);

        } catch(error){
            console.log(error);
        }
    }    

    function isAuthenticated(){
        const token = localStorage.getItem('token');
        if (!token){
            return false;
        }

        return true;
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token){
            return;
        }

        getData(token);
    }, [])

    return <userContext.Provider value={{
        user: user,
        register: register,
        login: login,
        isAuthenticated: isAuthenticated
    }}>
        {props.children}
    </userContext.Provider>
}