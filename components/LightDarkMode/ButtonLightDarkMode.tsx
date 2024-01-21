'use client'
import React from 'react';
import useDarkMode from "@/components/LightDarkMode/LightDarkMode";

function ColorMode() {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div>
            {colorTheme === "light" ? (
                // @ts-ignore
                <p onClick={() => setTheme("light")}>Light</p>
            ) : (
                // @ts-ignore
                <p onClick={() => setTheme("dark")}>Light</p>
    )
}
</div>
)
    ;
}

export default ColorMode;