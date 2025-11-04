
export default function navItem({ name , setCurrent}) {
    return(
        <li className='cursor-pointer hover:bg-(--bg-lighter) text-center rounded-2xl p-2'
        onClick={() => setCurrent(name)}>{name}</li>
    );
}