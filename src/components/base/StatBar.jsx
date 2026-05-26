export default function StatBar({statValue, min = 0, max = 100}) {
    const percentage = Math.min(((statValue - min) / (max - min)) * 100, 100);

    function getBarColour(percent) {    
            if (percent < 20) {
                return "bg-red-500";
            } else if (percent < 30) {
                return "bg-orange-500";
            } else if (percent < 40) {
                return "bg-amber-500";
            } else if (percent < 50) {
                return "bg-yellow-500";
            } else if (percent < 60) {
                return "bg-lime-500";
            } else if (percent < 70) {
                return "bg-green-500";
            } else if (percent < 80) {
                return "bg-emerald-500";
            } else if (percent < 90) {
                return "bg-teal-500"
            } else if (percent >= 90) {
                return "bg-teal-500";
            } else {
                return "bg-gray-500";
            }        
    }

    return (
        <div className="
        flex
        items-center
        gap-0
        ">

            <div className="
            h-4
            flex-1
            overflow-hidden
            rounded
            bg-cyan-50
            ">

                <div
                className={`
                h-full
                rounded
                ${getBarColour(percentage)}
                `}
                style={{
                    width: `${percentage}%`
                }}
                />

            </div>

            <span className="
            w-8
            text-right
            text-sm
            font-semibold
            ">
                {statValue}
            </span>

        </div>        
    );
}