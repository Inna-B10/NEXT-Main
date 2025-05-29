export const CounterButton = ({ onclick, className, text }) => {
  return (
    <button
      onClick={onclick}
      className={`px-8 text-5xl rounded-md border-b border-r border-black py-4 opacity-85 hover:scale-105 transition active:opacity-100 active:scale-95 ${className}`}>
      {text}
    </button>
  );
};
