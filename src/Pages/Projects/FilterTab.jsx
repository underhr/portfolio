
export default function FilterTab({ filter, setFilter, currentFilter }) {
    return(
        <span 
            className={`cursor-pointer ${(currentFilter === filter) ? `underline` : `no-underline`}`}
            onClick={() => setFilter(filter)}>
            {filter}
        </span>
    );
}