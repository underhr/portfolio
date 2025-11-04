
export default function Project({ type, title, description }) {
    const dashedTitle = title.toLowerCase().replace(/ /g, "-");
    return(
        <a 
          href={`https://underhr.github.io/${dashedTitle}/`}
          target="_blank" 
          className="w-70 p-5 flex flex-col gap-3 bg-(--bg-darker) text-(--text-darker) rounded-2xl">
            <img 
              className="h-35 w-full rounded-2xl" 
              src={`projects/${type}/${dashedTitle}-screenshot.png`}
              alt={title}/>

            <h2 className="font-bold text-xl">{title}</h2>
            <p>{description}</p>
        </a>
    );
}