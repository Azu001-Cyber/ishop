

export default function InputField({label, name, onEvent, placeholder, inputClassName, labelClassName}){
    return(
        <>
        <label htmlFor={label} className={labelClassName}>
            <input type="text" id={label} name={name} placeholder={placeholder} className={inputClassName} onChange={onEvent} aria-invalid/>
        </label>
        </>
    )
}