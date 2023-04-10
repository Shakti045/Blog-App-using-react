import { useContext } from "react";
import {Appcontext} from  "../Context/Appcontext"
import  Card from "./Card";
import Loader from "./Loader";
function Blogs(){
 let {loader,blogs}=useContext(Appcontext);
return (
    <div className="lg:m-[20vh] m-[15vh] min-h-[100vh] flex flex-col gap-5">
        {
            loader===true?<Loader></Loader>: blogs.map((data)=>{
                                  return <Card key={data.id} {...data}></Card>
                
                })
            }
          
  
    </div>
)



}
export default Blogs;