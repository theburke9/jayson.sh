import type { ReactNode } from "react";

type TopBarProps = {
    topBarIcon: ReactNode;
    topBarElement: ReactNode;
}

function TopBar({ topBarIcon, topBarElement }: TopBarProps) {
    return (
        <div className="flex items-center gap-2">
            { topBarIcon }
            { topBarElement }
        </div>
    );
}

export default TopBar;