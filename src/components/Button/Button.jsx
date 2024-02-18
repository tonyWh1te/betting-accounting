import { forwardRef } from 'react';
import styles from './Button.module.scss';

const Button = forwardRef(function Button(props, ref) {
  const { children, onClick, variant, className, disabled = false, ...attr } = props;

  const classes = `${styles.button}  ${styles[variant]} ${className}`;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <button
      {...attr}
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

export default Button;
