

export default function CreateShop({children, className, onEvent}){
    return(
        <>
            <form className={`${className}`} onSubmit={onEvent}>
                {children}
            </form>
        </>
    )
}