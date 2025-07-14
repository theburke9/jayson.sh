import type { ReactNode } from "react";

type HeaderProps = {
    leftElement: ReactNode;
    rightElement: ReactNode;
}

function Header({ leftElement, rightElement }: HeaderProps) {
    return (
        <section className="flex flex-col items-center gap-5 py-8 lg:flex-row lg:gap-0">
            <span className="flex-1">
                {leftElement}
            </span>
            <span className="flex-1 justify-end flex">
                {rightElement}
            </span>
        </section>
    );
}

export default Header;