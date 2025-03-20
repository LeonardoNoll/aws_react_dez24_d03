const InvalidInputMessage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <p className="text-red-500 text-sm mt-2">{children}</p>
    </div>
  );
};

export default InvalidInputMessage;
