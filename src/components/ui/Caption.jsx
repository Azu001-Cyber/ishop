

export default function Caption({text, className}){
    return(
        <>
            <p className={`text-muted ${className}`}>{text}</p>
        </>
    )
}