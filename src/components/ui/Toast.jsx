
export default function Toast({className, label}){
    return(
        <>
            <div className={className}>
                {label}
            </div>
        </>
    )
}