type UserInputTypes = {
    error: string,
    type: string,
    placeholder: string,
    name: string,
    value: string,
    minLength: number,
    touched: boolean,
    onBlur: React.FocusEventHandler<HTMLInputElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function UserInput({error, type, placeholder, name, value, minLength, touched, onBlur, onChange} : UserInputTypes) {

    const hasError = touched && value.length < minLength;

    return <>
            <label htmlFor={name}>{placeholder}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onBlur={onBlur} onChange={onChange} id={name} required/>
            {hasError && <span className="input-error">{error}</span>}
        </>
    
}