import {useState,useEffect} from "react";
export const useActivate=(initial)=>{
    const [elements,setElements]=useState({
        search:initial.search,
        bar:initial.bar
    });
    const showBar=()=>{
        document.getElementById(elements.bar).classList.toggle("activateBar");
    }
    const showSearch=()=>{
        document.getElementById(elements.search).classList.toggle("activate");
    }
    return{
        showSearch,
        showBar
    }
}