import { useEffect, useState } from "react";

export function useInfiniteScroll(items, increment = 20) {
    const [visibleCount, setVisibleCount] = useState(increment);

    useEffect(() => {
        function handleScroll() {
            // console.log({
            //     innerHeight: window.innerHeight,
            //     scrollY: window.scrollY,
            //     bodyHeight: document.body.offsetHeight
            // });
            const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
            // console.log(bottomReached)
            if (bottomReached && visibleCount < items.length) {
                setVisibleCount(prevVisibleCount => prevVisibleCount + increment);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [visibleCount, items.length, increment]);

    function resetVisibleCount() {
        setVisibleCount(increment);
    }    

    const visibleItems = items.slice(0, visibleCount);

    return {
        visibleCount,
        visibleItems,
        resetVisibleCount
    }
}