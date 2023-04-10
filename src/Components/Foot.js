import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";

function Foot(){
  let {page,totalpage,pagehandler,mode} =useContext(Appcontext);
  function previoushandler(){
      pagehandler(page-1);
  }
  function nexthandler(){
    pagehandler(page+1);
  }
   
  return <div className={`flex ${mode===true?'bg-slate-100':'bg-gray-900'} p-2 font-bold fw-[100vw] items-center justify-around fixed bottom-0 left-0 right-0 `}>
    <div className="flex gap-6">
    {
        page!==1?<button  onClick={previoushandler}>PREVIOUS</button>:""
    }
    {
        page!==totalpage?<button   onClick={nexthandler}>NEXT</button>:""
    }
    </div>
    <div>
        <h1>{`page no ${page} from ${totalpage}`}</h1>
    </div>
  </div>
}
export default Foot;