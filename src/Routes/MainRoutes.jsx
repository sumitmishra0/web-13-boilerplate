import {Route, Routes} from "react-router";
import { NavLink } from "react-router-dom";

export const MainRoutes = ()=>{
    return(

        <>
        <NavLink activeClassName="active_class" to="/">Home</NavLink>
        <NavLink activeClassName="active_class" to="/about">About</NavLink>
        <NavLink activeClassName="active_class" to="/contact">Contact</NavLink>
        </>
    )
}