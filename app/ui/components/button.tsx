interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
}

export function Button({type, children, className, ...rest}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      className={`${className} rounded-md bg-indigo-500 py-2 px-4 border-b-4 border-indigo-800 font-medium text-white transition hover:border-b-0 hover:bg-red-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-indigo-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
