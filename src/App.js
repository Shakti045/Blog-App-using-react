import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Foot from "./Components/Foot"
import { MdDarkMode,MdOutlineLightMode } from "react-icons/md";
import "./App.css"
import { useContext } from "react"
import { Appcontext } from "./Context/Appcontext"

function App(){
  let {mode,setmode}=useContext(Appcontext);
  function modehandler(){
     setmode(!mode);
     console.log(mode);
  }

    return (
      <div className={`flex flex-col  items-center ${mode===true?'bg-white text-black':'bg-black text-white'} `}>
        <div className=" z-20 fixed top-5 right-2">
          <button onClick={modehandler} className={` border-1 border-red-200 p-2 ${mode===true?'bg-slate-400':' bg-slate-700'} text-white flex gap-1 items-center`}>
              {
                mode===true?(<MdOutlineLightMode></MdOutlineLightMode>):(<MdDarkMode></MdDarkMode>)
              }
              {
                mode===true?"LIGHT MODE":"DARK MODE"
              }
          </button>
        </div>
      <Header></Header>
      <Blogs></Blogs>  
      <Foot></Foot>
        </div>
    )
}

export default App;