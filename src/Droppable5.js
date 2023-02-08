import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable5(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable5',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <><div ref={setNodeRef} style={style}>
      {props.children}
    </div>
    </>
  );
}
export default Droppable5;