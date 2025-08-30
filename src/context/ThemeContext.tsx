"use client";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

export type ThemeKey =
    | "light"
    | "dark"
    | "warm"
    | "cool"
    | "high-contrast"
    | "forest"
    | "ocean"
    | "sunset";

type ThemeInfo = {
    key: ThemeKey;
    name: string;
    isDark: boolean;
    // preview colors (for swatches)
    preview: { bg: string; text: string; primary: string };
};

const THEMES: ThemeInfo[] = [
    {key: "light", name: "Light", isDark: false, preview: {bg: "#ffffff", text: "#171717", primary: "#2563eb"}},
    {key: "dark", name: "Dark", isDark: true, preview: {bg: "#0a0a0a", text: "#ededed", primary: "#38bdf8"}},
    {key: "warm", name: "Warm Glow", isDark: false, preview: {bg: "#fff8f1", text: "#3b2f2f", primary: "#d97706"}},
    {key: "cool", name: "Cool Breeze", isDark: false, preview: {bg: "#f1f5f9", text: "#0f172a", primary: "#0ea5e9"}},
    {
        key: "high-contrast",
        name: "High Contrast",
        isDark: true,
        preview: {bg: "#000000", text: "#ffffff", primary: "#ffcc00"}
    },
    {key: "forest", name: "Forest", isDark: true, preview: {bg: "#0b1410", text: "#e2f7ea", primary: "#22c55e"}},
    {key: "ocean", name: "Ocean", isDark: false, preview: {bg: "#eef7fb", text: "#082f49", primary: "#0284c7"}},
    {key: "sunset", name: "Sunset", isDark: false, preview: {bg: "#fff4ec", text: "#3a2222", primary: "#f97316"}},
];

const STORAGE_KEY = "site-theme";

type ThemeContextType = {
    theme: ThemeKey;
    setTheme: (t: ThemeKey) => void;
    themes: ThemeInfo[];
    menuOpen: boolean;
    setMenuOpen: (o: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<ThemeKey>("light");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // read persisted theme or system preference on mount
        const stored = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as ThemeKey | null)) || null;
        const initial: ThemeKey = stored ?? (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        applyTheme(initial);
        setThemeState(initial);
    }, []);

    const applyTheme = (t: ThemeKey) => {
        const el = document.documentElement;
        el.setAttribute("data-theme", t);
        const info = THEMES.find(x => x.key === t);
        if (info?.isDark) {
            el.classList.add("dark");
        } else {
            el.classList.remove("dark");
        }
    };

    const setTheme = (t: ThemeKey) => {
        setThemeState(t);
        applyTheme(t);
        try {
            localStorage.setItem(STORAGE_KEY, t);
        } catch {
        }
    };

    const value = useMemo(() => ({
        theme,
        setTheme,
        themes: THEMES,
        menuOpen,
        setMenuOpen
    }), [theme, setTheme, menuOpen]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
