import { useState } from "react";
import type { Validator } from "../types/ValidationFormHookTypes";

export function useFormInput<T>(
    initialValue: T,
    validator?: Validator<T>,
    validateOnChange = true) {
    const [value, setValue] = useState<T>(initialValue);
    const [message, setMessage] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const validate = (v: T = value) => {
        if (!validator) {
            setIsValid(true);
            setMessage("");
            return { valid : true };
        }
        const result = validator(v);
        setIsValid(result.valid);
        setMessage(result.message ?? "");
        return result;
    }

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const newValue = (e.target as HTMLInputElement | HTMLSelectElement).value as unknown as T;
        setValue(newValue);

        if (validateOnChange) {
            validate(newValue);
        } else {
            setMessage("");
        }
    }

    const onBlur = () => validate();

    const clearMessage = () => setMessage("");

    return {value, message, onChange, validate, setValue, clearMessage, onBlur, isValid};
}