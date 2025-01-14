import { useState } from "react";
import PropTypes from 'prop-types';

const Accordion = ({lists, title}) => {
    // State for managing the currently active item
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleHandler=(index)=>{
        // If the clicked item is already active, close it. Otherwise, set it to active.
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
    <>
    <h1 className="text-center underline mb-20">{title.length > 0 ? title : "Accordion in React"}</h1>
    <ul className="sm:w-8/12 md:w-6/12 mx-auto shadow-2xl ">
        {lists.map((item, index)=>{
            return(<li key={index} className={`cursor-pointer ${activeIndex === index ? "bg-gray-400" : "bg-lightGray"}`} onClick={()=>toggleHandler(index)}>
               <div className="flex p-3 justify-between items-center font-bold">
                    <span className="">
                    {item.title}
                    </span>
                    <span className={`${activeIndex === index ?  "transition-all rotate-90" : "transition-all rotate-0" } `}><i className="fa-solid fa-chevron-right"></i></span>
                </div>
                <ul>
                {activeIndex === index && <li className="border-transparent border-black bg-white p-4 font-medium">{item.content}</li> }   
                </ul>
            </li>)
        } )}
    </ul>
    </>
  )
}

Accordion.propTypes = {
    lists : PropTypes.array,
    title : PropTypes.string
}
Accordion.defaultProps = {
    lists : []
}

export default Accordion;