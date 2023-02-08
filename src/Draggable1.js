import React from 'react';
import {useDraggable} from '@dnd-kit/core';

function Draggable1(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
 id: 'draggable1'
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <>
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {props.children}</button>
    </>
          
  );
}
export default Draggable1;