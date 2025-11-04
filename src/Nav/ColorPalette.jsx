import { useState } from "react";
import Color from "./Color";

export default function ColorPalette({ paletteOpen, setTheme }) {
    return(
        <div className={`absolute top-12 right-6 sm:-top-12 sm:right-0 sm:left-15 bg-white h-30 w-30 rounded-2xl items-center justify-evenly flex-wrap ${paletteOpen ? 'flex' : 'hidden'}`}>
            <Color color="red" setTheme={setTheme}/>
            <Color color="blue" setTheme={setTheme}/>
            <Color color="green" setTheme={setTheme}/>
            <Color color="violet" setTheme={setTheme}/>
            <Color color="blue" setTheme={setTheme}/>
            <Color color="green" setTheme={setTheme}/>
            <Color color="violet" setTheme={setTheme}/>
            <Color color="blue" setTheme={setTheme}/>
            <Color color="green" setTheme={setTheme}/>

        </div>
    );
}