

export default function Button({label, className, onEvent}){
    return(
        <>
            <button className={className} onClick={onEvent}>{label}</button>
        </>
    )
}