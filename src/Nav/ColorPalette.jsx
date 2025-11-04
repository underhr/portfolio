import { useState } from "react";
import Color from "./Color";

export default function ColorPalette({ paletteOpen, setTheme }) {
    return(
        <div className={`border-2 border-(--text-lighter) bg-white absolute top-12 right-6 sm:-top-12 sm:right-0 sm:left-15 h-30 w-30 rounded-2xl items-center justify-evenly flex-wrap ${paletteOpen ? 'flex' : 'hidden'}`}>
            <Color color="white" setTheme={setTheme}/>
            <Color color="brown" setTheme={setTheme}/>
            <Color color="pink" setTheme={setTheme}/>
            
            <Color color="red" setTheme={setTheme}/>
            <Color color="orange" setTheme={setTheme}/>
            <Color color="yellow" setTheme={setTheme}/>

            <Color color="green" setTheme={setTheme}/>
            <Color color="blue" setTheme={setTheme}/>
            <Color color="purple" setTheme={setTheme}/>

        </div>
    );
}