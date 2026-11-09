
export default function TextAreaField({label, labelClassName, textAreaClassName, onEvent, name, placeholder}){
    return(
        <>
            <label htmlFor={label} className={labelClassName}>
                <textarea name={name} id={label} className={textAreaClassName} onChange={onEvent} placeholder={placeholder} aria-invalid></textarea>
            </label>
        </>
    )
}