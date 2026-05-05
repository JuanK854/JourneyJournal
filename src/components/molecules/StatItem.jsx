
function StatItem({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-bold text-base text-gray-700">{value}</span>
            <span>{label}</span>
        </div>
    )
}
export default StatItem