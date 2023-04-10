import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";

function Header(){
    let {mode} =useContext(Appcontext);
    return (
        <div>
        <h1 className={`w-[100vw] lg:text-center p-6 fixed top-0 left-0 ${mode===true?'bg-slate-100':' bg-gray-900 '}  text-2xl font-semibold`}>TECH BLOGS</h1>
        </div>
    )
}
export default Header;