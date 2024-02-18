import { useRef } from 'react';
import styles from './Input.module.scss';

const Input = ({
  errors,
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  value,
  wrapperStyle,
  className = '',
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  const hasError = errors && !value && required;

  const errorStyle = {
    borderColor: hasError && '#ff0000',
    boxShadow: hasError && '0 0 5px #ff0000',
  };

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={wrapperStyle}
      onClick={handleClick}
    >
      <input
        className={styles.input}
        ref={inputRef}
        aria-label={name}
        data-testid={name}
        tabIndex={0}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={{
          ...inputStyle,
          ...errorStyle,
        }}
        disabled={disabled}
        readOnly={readOnly}
      />
      {hasError && <p className={styles.error}>Required</p>}
    </div>
  );
};

export default Input;
