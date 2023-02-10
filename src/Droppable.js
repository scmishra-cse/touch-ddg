import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <><div className='droppable' ref={setNodeRef} style={style}>
      {props.children}
    </div>
    </>
  );
}
export default Droppable;