
const Spinner = ({ size = 20, className = "" }) => {
    return (
        <div
            style={{ width: size, height: size }}
            className={`animate-spin rounded-full border-2 border-gray-300 border-t-gray-800 ${className}`}
        />
    );
};

export default Spinner;