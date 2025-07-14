import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-7xl w-full mx-auto p-4">
            { children }
        </div>
    );
}

export default Container;