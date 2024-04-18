import React from "react";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

export const Logout = () =>{

    const user = useSelector(selectUser)

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventrDefault();
        dispatch(logout())
    }
   return(
    <div>
        <h1>
            Welcome
            <span>{user.name}</span> {" "}
            <button onClick={(e) => handleLogout(e)}>facebook</button>
        </h1>
    </div>
   )
}