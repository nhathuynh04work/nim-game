function Overlay({ onClick, children }) {
    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 text-6xl font-bold text-white flex items-center justify-center"
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Overlay;
