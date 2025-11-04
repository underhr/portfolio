
export default function Project({ filter, type, title, description }) {
  const dashedType = type.toLowerCase().replace(/ /g, "-");
  const dashedTitle = title.toLowerCase().replace(/ /g, "-");
  return(
    <a 
      href={`https://underhr.github.io/${dashedTitle}/`}
      target="_blank" 
      className={`w-60 p-5 flex flex-col gap-3 bg-(--bg-darker) text-(--text-darker) rounded-2xl ${(filter !== type && filter !== 'All') ? `hidden` : `flex` }`}>

      <img 
          className="h-30 w-full rounded-2xl" 
          src={`projects/${dashedType}/${dashedTitle}-screenshot.png`}
          alt={title}/>
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
    </a>
  );
}