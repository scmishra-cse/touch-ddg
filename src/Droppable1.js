import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable1(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable1',
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
export default Droppable1;