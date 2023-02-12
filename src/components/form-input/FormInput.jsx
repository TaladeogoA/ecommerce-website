import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form__input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form__input__label`}
          htmlFor={label}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
