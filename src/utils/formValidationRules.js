const formValidationRules = (type) => {
    const validationRules = {
        email: {
                required: 'Email is required',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: 'Invalid email format',
                },
        },
        password: {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                },
                pattern: {
                    value: /^(?=.*[A-Z]).{6,}$/,
                    message: 'Password must contain at least 1 uppercase letter',
            },
        },
        default: {
            required: true,
        },
    };

    return validationRules[type] || validationRules.default;
};

export default formValidationRules;