interface ContainerProps {
  children: React.ReactNode;
  classname?: string;
}

const Container = ({ children, classname }: ContainerProps) => {
  return (
    <div className={`${classname} " mx-auto w-full max-w-7xl" `}>
      {children}
    </div>
  );
};

export default Container;
