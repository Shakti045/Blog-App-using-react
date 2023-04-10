import { createContext } from "react";
import { useState,useEffect } from "react";
import {baseUrl} from "../baseUrl";

export let Appcontext=createContext();

function Appcontextprovider({children}){
  let [loader,setloader]=useState(false);
  let [page,setpage]=useState(1);
  let [totalpage,settotalpage]=useState(null);
  let [blogs,setblogs]=useState([]);
  let [mode,setmode]=useState(true);
  async function getdata(page){

    setloader(true);
     try{
        let url=`${baseUrl}?page=${page}`
        let data=await fetch(url);
        let output=await data.json();
        setpage(output.page);
        settotalpage(output.totalPages);
        setblogs(output.posts)
     }catch(error){
        console.log(error);
     }

   setloader(false)

  }


useEffect(()=>{
    getdata(1);
},[])

 function pagehandler(page){
    getdata(page);
 }

 let value={
    loader,
    page,
    totalpage,
    blogs,
    setblogs,
    setloader,
    setpage,
    settotalpage,
    getdata,
    pagehandler,
    mode,
    setmode
 }
 return <Appcontext.Provider value={value}>
    {children}
 </Appcontext.Provider>
}


export default Appcontextprovider;