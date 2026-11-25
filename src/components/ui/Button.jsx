
import { Link } from "react-router-dom"

export default function Button({to, label, className, onEvent, ref}){

    return(
        <>
            {to ? <Link to={to} className={className} role="navigation" ref={ref}>{label}</Link> 
            : <button className={className} onClick={onEvent} ref={ref}>{label}</button>}
        </>
    )
}