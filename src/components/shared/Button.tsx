import styles from '../../styles/button.module.scss';

type ButtonProps = {
  color: 'primary' | 'success' | 'error';
  variant?: 'weak' | 'strong';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  color,
  variant = 'strong',
  size = 'medium',
  children,
}) => {
  const colorClass =
    variant === 'weak' ? `button--weak-${color}` : `button--${color}`;
  const sizeClass = `button--${size}`;

  return (
    <button className={`${styles.button} ${styles[colorClass]} ${styles[sizeClass]}`}>
      {children}
    </button>
  );
};

export default Button;