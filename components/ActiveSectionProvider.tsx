"use client";

import { createContext, useContext, useState } from "react";

type Section = "home" | "about" | "skills" | "education" | "contact";

const ActiveSectionContext = createContext<{
    active: Section;
    setActive: (s: Section) => void;
} | null>(null);

export function ActiveSectionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [active, setActive] = useState<Section>("home");

    return (
        <ActiveSectionContext.Provider value={{ active, setActive }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    const ctx = useContext(ActiveSectionContext);
    if (!ctx) throw new Error("useActiveSection must be used inside provider");
    return ctx;
}
