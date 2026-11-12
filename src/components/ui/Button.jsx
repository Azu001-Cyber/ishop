
import { Link } from "react-router-dom"

export default function Button({to, label, className, onEvent}){

    return(
        <>
            {to ? <Link to={to} className={className} role="navigation">{label}</Link> 
            : <button className={className} onClick={onEvent}>{label}</button>}
        </>
    )
}