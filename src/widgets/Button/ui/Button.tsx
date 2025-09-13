import './Button.scss';

type ButtonSize = 'small' | 'medium' | 'large' | 'huge';

interface ButtonProps {
  size: ButtonSize;
  insideText: string;
}

const Button = (props: ButtonProps) => {
  const {size = 'small', insideText} = props;

  return (
    <button
      type="button"
      className={`button
      ${size === 'small' && 'button--small'}
      ${size === 'medium' && 'button--medium'}
      ${size === 'large' && 'button--large'}
      ${size === 'huge' && 'button--huge'}
      `}
      onClick={() => {
      }}
    >
      {insideText}
    </button>
  );
};

export default Button;