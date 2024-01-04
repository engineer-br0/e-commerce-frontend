import { useState } from "react";
import { ContextInit } from "../context/Context";
import { RiDeleteBack2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [tempValue, setTempValue] = useState<string>("");
    const { searchValue, setSearchValue } = ContextInit();
    return (
        <div className=" flex row items-center">
            <input value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-[70vw] sm:w-[40vw] font-serif h-10 p-2 pr-7 border-b border-black-400 outline-0 focus:border-black bg-gray-200 focus:bg-transparent" placeholder="Search" />
            <RiDeleteBack2Line className="relative right-6 cursor-pointer" onClick={() => { setTempValue(""); setSearchValue("") }} />
            <div style={{ fontSize: "35px", padding: "3px" }}>
                <CiSearch onClick={(e) => setSearchValue(tempValue)} className="cursor-pointer" />
            </div>

        </div>
    );
}

export default SearchBar;