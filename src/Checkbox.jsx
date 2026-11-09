
export default function CheckBox({className, onEvent, productStatus}){
    return(
        <>
        <input 
            type="checkbox" 
            name={productStatus}
            onClick={onEvent} 
            className={className}
            aria-checked='true'/>
        </>
    )
}