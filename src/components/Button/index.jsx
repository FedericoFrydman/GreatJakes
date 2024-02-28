import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

export const Button = ({
  variant = 'default',
  disabled,
  iconName,
  children,
}) => {
  return (
    <button
      className={variant !== 'default' ? `button button-${variant}` : 'button'}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={iconName} />
      <span className="text">{children}</span>
    </button>
  );
};
