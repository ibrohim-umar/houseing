import { useMemo } from "react";
import { useLocation } from "react-router-dom";


export function useSearch () {
    const {search} = useLocation();
    return new useMemo (() => new URLSearchParams(search), [search])
}

export default useSearch