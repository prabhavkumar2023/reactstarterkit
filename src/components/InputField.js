import PropTypes from 'prop-types';
import formValidationRules from '../utils/formValidationRules';

const InputField = ({ type, component, name, placeholder, className, register, continerclass, labelClass, errors, inputkey }) => {
    const validationRules = formValidationRules(inputkey);

    return (
        <div className={continerclass}>
            <label className={labelClass}>{name}</label>
            <div className="relative">
                <input
                    name={name}
                    component={component}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                    {...register(inputkey, validationRules)}
                />
            </div>
            {errors && errors[inputkey] && <span className="text-sm errorText">{errors[inputkey].message}</span>}
        </div>
    );
}

InputField.propTypes = {
    type: PropTypes.string,
    component: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    continerclass: PropTypes.string,
    labelClass: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object,
    inputkey: PropTypes.string.isRequired
}

InputField.defaultProps = {
    type: "text",
    component: "input",
    name: "",
    placeholder: "",
    className: "w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
    continerclass: "mb-4",
    labelClass: "mb-2.5 block font-medium text-black dark:text-white",
    register: () => { },
}

export default InputField;