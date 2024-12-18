import { Typography } from "@mui/material";
import slider_1 from "../../assets/images/slider_1.webp"
import slider_2 from "../../assets/images/slider_2.webp"
import useSlider from "./useSlider";
import { NavLink } from "react-router-dom";

const Slider = () => {
    const { categories } =  useSlider()
    return(
        <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6 text-[#7D8184] pb-6">
            <div className="flex flex-col gap-y-2 p-2 mr-8 col-span-1">
                {categories.map((item, index) => {
                    return <NavLink to={item.name} 
                        key={index} 
                        className="hover:cursor-pointer hover:text-red-400 overflow-y-auto hover:underline text-sm"
                    >
                            {item?.name}
                    </NavLink>
                })}
            </div>
            
            <div className="flex items-center justify-center flex-1 md:col-span-3 lg:col-span-5 h-full p-2">
                <img src={slider_1} alt="slider_1" className="object-cover rounded-lg w-full"/>
            </div>
        </div>
    )
};

export default Slider