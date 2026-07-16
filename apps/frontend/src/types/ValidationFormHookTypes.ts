export type ValidationResult = {
    valid: boolean;
    message?: string;
}

export type Validator<T> = (value : T) => ValidationResult;
