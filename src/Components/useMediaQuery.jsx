import React from 'react'
import { useState, useEffect } from 'react'

const useMediaQuery = () => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listner = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [matches, query])
    return matches;

}

export default useMediaQuery