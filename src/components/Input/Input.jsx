import "./Input.scss";

const Input = ({
  labelName,
  placeholderText,
  type,
  name,
  value,
  onChange,
  className,
  options,
  formData,
}) => {
  if (type === "password" || type === "email") {
    return (
      <div className={`label-input`}>
        <div className={`label-input__input-container ${className}`}>
          <input
            type={type}
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className={`label-input__input ${className}-input`}
          />
        </div>
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="label-input">
        <h3 className={`label-input__title ${className}-title`}>{labelName}</h3>
        <div
          className={`label-input__input-container label-input__input-container--textarea  ${className}`}
        >
          <textarea
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className={`label-input__input label-input__input--textarea ${className}-input`}
          />
        </div>
      </div>
    );
  }

  if (type === "dropdown") {
    return (
      <div className={`label-input ${className}-input-container`}>
        <h3 className={`label-input__title ${className}-title`}>{labelName}</h3>
        <div
          className={`label-input__input-container ${className} ${className}-input-form`}
        >
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`label-input__input label-input__input--dropdown ${className}-input`}
          >
            <option value="" disabled>
              {placeholderText}
            </option>
            {options.map((option, index) => {
              const optionValue =
                typeof option === "object" ? option.value : option;
              const optionLabel =
                typeof option === "object" ? option.label : option;
              return (
                <option key={`${index}${optionValue}`} value={optionValue}>
                  {optionLabel}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div className="label-input">
        <h3 className={`label-input__title ${className}-title`}>{labelName}</h3>
        <div className={`label-input__radio ${className}`}>
          {options.map((option) => {
            return (
              <div key={option} className="label-input__radio-text">
                <input
                  type="radio"
                  id={`radioInput-${option}`}
                  className={`label-input__radio-input ${className}-input`}
                  name={name}
                  value={option}
                  checked={value === option}
                  onChange={onChange}
                />
                <p
                  className={`label-input__radio-item ${
                    value === option ? "label-input__radio-item--selected" : ""
                  } ${className}-radio`}
                >
                  {option}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === "text" || type === "email") {
    return (
      <div className="label-input">
        <h3 className={`label-input__title ${className}-title`}>{labelName}</h3>
        <div className={`label-input__input-container ${className}`}>
          <input
            type={type}
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className={`label-input__input ${className}-input`}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default Input;
