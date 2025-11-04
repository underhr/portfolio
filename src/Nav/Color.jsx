
export default function Color({ color, setTheme }) {
    return(
        <div 
            data-theme={color} 
            className="bg-linear-to-l from-(--bg-darker) to-(--text-darker) rounded-2xl h-8 w-8 cursor-pointer"
            onClick={() => setTheme(color)}>
        </div>
    );
}