
export default function navItem({ name , setCurrent}) {
    return(
        <li className='cursor-pointer hover:bg-(--bg-lighter) text-center rounded-2xl p-1'
        onClick={() => setCurrent(name)}>{name}</li>
    );
}