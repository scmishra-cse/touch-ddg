import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import './App.css';
import Droppable from './Droppable';
import Draggable from './Draggable';
import Draggable1 from './Draggable1';
import Draggable2 from './Draggable2';
import Draggable3 from './Draggable3';
import Draggable4 from './Draggable4';
import Draggable5 from './Draggable5';
import Droppable1 from './Droppable1';
import Droppable2 from './Droppable2';
import Droppable3 from './Droppable3';
import Droppable4 from './Droppable4';
import Droppable5 from './Droppable5';
import './Sensors';

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
    <div className='drag_item'>
      <img src='/images/icecube.png' width={"50px"}  alt='oops'/>
    </div>
    </Draggable>
 );
 const [isDropped1, setIsDropped1] = useState(false);
  const draggableMarkup1 = (
    <Draggable1>
    <div className='drag_item'>
      <img src='/images/bgwhiskey.png' width={"50px"}  alt='oops'/>
    </div>
    </Draggable1>
 );
 const [isDropped2, setIsDropped2] = useState(false);
const draggableMarkup2 = (
  <Draggable2>
  <div className='drag_item'>
    <img src='/images/bgcola.png' width={"50px"}  alt='oops'/>
  </div>
  </Draggable2>
);

 const [isDropped3, setIsDropped3] = useState(false);
 const draggableMarkup3 = (
   <Draggable3>
   <div className='drag_item'>
     <img src='/images/bgsoda.png' width={"50px"}  alt='oops'/>
   </div>
   </Draggable3>
);
const [isDropped4, setIsDropped4] = useState(false);
const draggableMarkup4 = (
  <Draggable4>
  <div className='drag_item'>
    <img src='/images/bgorange.png' width={"50px"}  alt='oops'/>
  </div>
  </Draggable4>
);
const [isDropped5, setIsDropped5] = useState(false);
const draggableMarkup5 = (
  <Draggable5>
  <div className='drag_item'>
    <img src='/images/lemon.png' width={"50px"}  alt='oops'/>
  </div>
  </Draggable5>
);


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='section'>
        <div className='draggable'>
        {!isDropped ? draggableMarkup : null}
        {!isDropped1 ? draggableMarkup1 : null}
        {!isDropped2 ? draggableMarkup2 : null}
        {!isDropped3 ? draggableMarkup3 : null}
        {!isDropped4 ? draggableMarkup4 : null}
        {!isDropped5 ? draggableMarkup5 : null}
    
        </div>
      <div className='draggable2'>

      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>

      <Droppable1>
      {isDropped1 ? draggableMarkup1 : 'Drop here'}
      </Droppable1>

      <Droppable2>
      {isDropped2 ? draggableMarkup2 : 'Drop here'}
      </Droppable2>

      <Droppable3>
      {isDropped3 ? draggableMarkup3 : 'Drop here'}
      </Droppable3>

      <Droppable4>
      {isDropped4 ? draggableMarkup4 : 'Drop here'}
      </Droppable4>

      <Droppable5>
      {isDropped5 ? draggableMarkup5 : 'Drop here'}
      </Droppable5>
      </div>
      </div>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
    if (event.over && event.over.id === 'droppable1') {
      setIsDropped1(true);
    }
    if (event.over && event.over.id === 'droppable2') {
      setIsDropped2(true);
    }
    if (event.over && event.over.id === 'droppable3') {
      setIsDropped3(true);
    }
    if (event.over && event.over.id === 'droppable4') {
      setIsDropped4(true);
    }
    if (event.over && event.over.id === 'droppable5') {
      setIsDropped5(true);
    }
  }
}
export default App;