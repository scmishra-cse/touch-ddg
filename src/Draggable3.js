import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable3(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
 id: 'draggable3'
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
export default Draggable3;