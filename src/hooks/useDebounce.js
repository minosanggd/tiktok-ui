import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedvalue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedvalue;
}

export default useDebounce;
