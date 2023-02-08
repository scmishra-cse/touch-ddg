import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import './App.css';
import Droppable from './Droppable';
import Draggable from './Draggable';

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
    <div className='drag_item'>
      <img src='/images/bgcola.png' width={"50px"}  alt='oops'/>
    </div>
    </Draggable>
 
 );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='section'>
        <div className='draggable'>
        {!isDropped ? draggableMarkup : null}
        </div>
      <div className='draggable2'>
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
      </div>
      </div>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}
export default App;