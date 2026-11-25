

export default function CreateShop({children, className, onEvent, ref}){
    return(
        <>
            <form className={`${className}`} onSubmit={onEvent} ref={ref}>
                {children}
            </form>
        </>
    )
}