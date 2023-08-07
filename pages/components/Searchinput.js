"use client"
import React,{useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {GrMicrophone} from "react-icons/gr";
import {TbCameraPlus} from "react-icons/tb";
import {useRouter} from "next/navigation";

const Searchinput = () => {

    const [input, setInput] = useState("")
    const [loadig, setLoading] = useState(false)
    const router = useRouter();

    // FORM
    const handleSubmit = (e) =>{
        e.preventDefault();
        router.push(`/Search/web?searchTerm=${input}`)
    }

    // IamfeelingLucky
    const hadlelucky = async () =>{
        setLoading(true)
        const res = await fetch("https://random-word-api.vercel.app/api?words=1&letter=y").then(res => res.json()).then(data => data[0])
        setLoading(false)
        if(!res) return
        router.push(`/Search/web?searchTerm=${res}`)
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="flex w-full  mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
            <input type="text" className="flex-grow focus:outline-none"
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
            />
            <GrMicrophone className="text-xl cursor-pointer"/>
            <TbCameraPlus className="text-xl cursor-pointer ml-5"/>

        </form>

        <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row my-8'>
        <button className="bg-[#f8f9f9] rounded-md text-sm
       text-gray-800 hover: ring-gray-200
        focus:outline-none active:ring-gray-200
        hover:shadow-md w-36 h-10 transition-shadow" onClick={handleSubmit}>Google Search</button>



        <button className="bg-[#f8f9f9] rounded-md text-sm
       text-gray-800 hover: ring-gray-200
        focus:outline-none active:ring-gray-200
        hover:shadow-md w-36 h-10 transition-shadow" onClick={hadlelucky}> {loadig ? "Loading...." : "I'm Felling Lucky"}</button>
            </div>

            <p className="text-sm " style={{fontFamily: 'Open Sans', }}>Google offered in:

                  <a className="px-1 text-sm cursor-pointer font-medium	 hover:underline text-colour">سنڌي </a> 
                  <a className="px-1 text-sm cursor-pointer font-medium	 hover:underline text-colour">پښتو</a> 
                  <a className="px-2 text-sm cursor-pointer font-medium	 hover:underline text-colour">اردو</a> 
          </p>
        </>
    )
} 

export default Searchinput; 