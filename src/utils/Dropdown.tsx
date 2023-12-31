import { Link } from "react-router-dom";

const Dropdown = (props:
    {
        arr:
        {
            field: string,
            path: string
        }[]
    }) => {
    return (
        <div>
            <div key={Math.random() * 1000} className="relative">
                <ul className="border border-black-200 rounded-sm bg-white p-2 absolute right-0 p-4 text-left pr-20 font-medium font-serif text-gray-500 w-52 flex flex-col">
                    {
                        props.arr.map((item) => {
                            return <>
                                <div key={Math.random() * 1000}>
                                    <Link to={item.path} className="hover:text-black hover:font-bold">{item.field}</Link>
                                </div>
                            </>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;