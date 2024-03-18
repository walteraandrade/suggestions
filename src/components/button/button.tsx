interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
      {children}
    </button>
  );
};

export default Button;
