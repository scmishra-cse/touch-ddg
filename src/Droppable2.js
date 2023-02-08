import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable2(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable2',
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
export default Droppable2;