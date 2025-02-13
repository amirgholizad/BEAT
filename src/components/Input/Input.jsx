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
}) => {
  if (type === "password" || type === "email") {
    return (
      <div className="label-input">
        <div className={`label-input__input-container ${className}`}>
          <input
            type={type}
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className="label-input__input"
          />
        </div>
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="label-input">
        <h3 className="label-input__title">{labelName}</h3>
        <div
          className={`label-input__input-container label-input__input-container--textarea  ${className}`}
        >
          <textarea
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className="label-input__input label-input__input--textarea"
          />
        </div>
      </div>
    );
  }

  if (type === "dropdown") {
    return (
      <div className="label-input">
        <h3 className="label-input__title">{labelName}</h3>
        <div className={`label-input__input-container ${className}`}>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="label-input__input label-input__input--dropdown"
          >
            <option value="" disabled>
              {placeholderText}
            </option>
            {options.map((option) => {
              const optionValue =
                typeof option === "object" ? option.value : option;
              const optionLabel =
                typeof option === "object" ? option.label : option;
              return (
                <option key={optionValue} value={optionValue}>
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
        <h3 className="label-input__title">{labelName}</h3>
        <div className={`label-input__radio ${className}`}>
          {options.map((option) => {
            const optionValue =
              typeof option === "object" ? option.value : option;
            const optionLabel =
              typeof option === "object" ? option.label : option;
            return (
              <div key={optionValue} className="label-input__radio-text">
                <input
                  type="radio"
                  id={`radioInput-${optionValue}`}
                  className="label-input__radio-input"
                  name={name}
                  value={optionValue}
                  checked={value === optionValue}
                  onChange={onChange}
                />
                <p
                  className={`label-input__radio-item ${
                    value === optionValue
                      ? "label-input__radio-item--selected"
                      : ""
                  }`}
                >
                  {optionLabel}
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
        <h3 className="label-input__title">{labelName}</h3>
        <div className={`label-input__input-container ${className}`}>
          <input
            type={type}
            placeholder={placeholderText}
            name={name}
            value={value}
            onChange={onChange}
            className="label-input__input"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default Input;
