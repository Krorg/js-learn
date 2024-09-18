import { createContext, useContext, ReactNode, useState, useMemo } from 'react';

const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 0);
    };

    const valueContex = useMemo(() => {
        return { value, forceUpdate };
    }, [value]);

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={valueContex}>
            {children}
        </ForceUpdateContext.Provider>
    );
}
