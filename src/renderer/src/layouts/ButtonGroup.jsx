function ButtonGroup({ children, className }) {
    return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export default ButtonGroup;
