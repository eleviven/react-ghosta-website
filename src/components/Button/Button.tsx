export type ButtonProps = React.ComponentProps<"button"> & {};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button button--secondary" {...props}>
      {children}
    </button>
  );
};

export default Button;
