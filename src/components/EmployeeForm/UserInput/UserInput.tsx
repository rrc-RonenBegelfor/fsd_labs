type UserInputTypes = {
    error: string,
    type: string,
    placeholder: string,
    name: string,
    value: string,
    onBlur: React.FocusEventHandler<HTMLInputElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function UserInput({error, type, placeholder, name, value, onBlur, onChange} : UserInputTypes) {

    const hasError = (error !== "");

    return <>
            <label htmlFor={name}>{placeholder}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onBlur={onBlur} onChange={onChange} id={name} required/>
            {hasError && <span className="input-error">{error}</span>}
        </>
    
}