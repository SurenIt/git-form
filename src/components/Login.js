import React, {useState} from "react";
import "./Login.css"
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
export const Login = () =>{
    const [name,setName] = useState()
    const [lname,setLname] = useState()
    const [email,setEmail] = useState()

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            lname:lname,
            email:email,
            loggedIn:true
        }))

        
    }
    return(
        <div className="formRegister">
            <form onSubmit ={(e) => handleSubmit(e)}>
                <input
                    type="name"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="name"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}