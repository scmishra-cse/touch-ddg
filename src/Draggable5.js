import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable5(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
 id: 'draggable5'
  });
  
  const style = transform ? {
    transform: CSS.Translate.toString(transform),
  } : undefined;

  
  return (
    <>
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {props.children}</button>
    </>
          
  );
}
export default Draggable5;