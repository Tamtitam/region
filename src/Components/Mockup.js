import React from "react";
import  {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Mockup = ({id, image, title, color, category}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id:title});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
    <div
    ref = {setNodeRef}
    {...attributes}
    {...listeners} 
    style = {style}
    className = "mockup"
    >
  
    <img className="mockupImg" src={`/images/${image}`} alt="T-shirt 1" />
    <h3>{title}</h3>
    <p>{color},{category}</p>

  </div>
  );
}

export default Mockup;
