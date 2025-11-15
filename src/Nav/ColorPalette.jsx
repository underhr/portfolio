import Color from "./Color";

export default function ColorPalette({ paletteOpen, setTheme }) {
    return(
        <div className={`border-2 border-(--text-lighter) bg-white absolute top-12 right-6 sm:-top-12 sm:right-0 sm:left-15 h-30 w-30 rounded-2xl items-center justify-evenly flex-wrap ${paletteOpen ? 'flex' : 'hidden'}`}>
            <Color color="london-fog" setTheme={setTheme}/>
            <Color color="caramel-macchiato" setTheme={setTheme}/>
            <Color color="barley-black" setTheme={setTheme}/>

            <Color color="strawberry-cream" setTheme={setTheme}/>
            <Color color="thai-tea" setTheme={setTheme}/>
            <Color color="matcha-latte" setTheme={setTheme}/>
            
            <Color color="ocean-frost" setTheme={setTheme}/>
            <Color color="blueberry-milk" setTheme={setTheme}/>
            <Color color="ube-latte" setTheme={setTheme}/>



        </div>
    );
}