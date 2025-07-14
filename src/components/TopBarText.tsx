import { useEffect, useState } from "react";

type TopBarTextProps = {
    text: string;
    duration?: number;
}

function TopBarText({ text, duration = 500 }: TopBarTextProps) {
    const [ showUnderscore, setShowUnderscore ] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowUnderscore(state => !state);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    return (
        <span>
            { text ?? "" }
            { showUnderscore && <span className="text-primary" aria-hidden="true">_</span> }
        </span>
    );
}

export default TopBarText;