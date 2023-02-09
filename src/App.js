
import React, {useState} from "react";
import {
  DndContext,

// import React, {useState} from 'react';
// import {DndContext} from '@dnd-kit/core';
// import './App.css';
// import Droppable from './Droppable';
// import Draggable from './Draggable';
// import Draggable1 from './Draggable1';
// import Draggable2 from './Draggable2';
// import Draggable3 from './Draggable3';
// import Draggable4 from './Draggable4';
// import Draggable5 from './Draggable5';
// import Droppable1 from './Droppable1';
// import Droppable2 from './Droppable2';
// import Droppable3 from './Droppable3';
// import Droppable4 from './Droppable4';
// import Droppable5 from './Droppable5';
// import './Sensors';
// import {
//   KeyboardSensor,
//   MouseSensor,
//   TouchSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";


// function App() {
//   const sensors = useSensors(
//     useSensor(MouseSensor),
//     useSensor(TouchSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );
//   const [isDropped, setIsDropped] = useState(false);
//   // const [isString, stringValid]= useState('/images/icecube.png','/images/bgwhiskey.png');
//   const draggableMarkup = (
//     <Draggable>
//     <div className='drag_item'>
//       <img src='/images/icecube.png' width={"50px"}  alt='oops'/>
//     </div>
//     </Draggable>
//  );
//  const [isDropped1, setIsDropped1] = useState(false);
//   const draggableMarkup1 = (
//     <Draggable1>
//     <div className='drag_item'>
//       <img src='/images/bgwhiskey.png' width={"50px"}  alt='oops'/>
//     </div>
//     </Draggable1>
//  );
//  const [isDropped2, setIsDropped2] = useState(false);
// const draggableMarkup2 = (
//   <Draggable2>
//   <div className='drag_item'>
//     <img src='/images/bgcola.png' width={"50px"}  alt='oops'/>
//   </div>
//   </Draggable2>
// );

//  const [isDropped3, setIsDropped3] = useState(false);
//  const draggableMarkup3 = (
//    <Draggable3>
//    <div className='drag_item'>
//      <img src='/images/bgsoda.png' width={"50px"}  alt='oops'/>
//    </div>
//    </Draggable3>
// );
// const [isDropped4, setIsDropped4] = useState(false);
// const draggableMarkup4 = (
//   <Draggable4>
//   <div className='drag_item'>
//     <img src='/images/bgorange.png' width={"50px"}  alt='oops'/>
//   </div>
//   </Draggable4>
// );
// const [isDropped5, setIsDropped5] = useState(false);
// const draggableMarkup5 = (
//   <Draggable5>
//   <div className='drag_item'>
//     <img src='/images/lemon.png' width={"50px"}  alt='oops'/>
//   </div>
//   </Draggable5>
// );


//   return (
//     <DndContext  sensors={sensors}onDragEnd={handleDragEnd}>
//       <div className='section'>
//         <div className='draggable'>
//         {!isDropped ? draggableMarkup : null}
//         {!isDropped1 ? draggableMarkup1 : null}
//         {!isDropped2 ? draggableMarkup2 : null}
//         {!isDropped3 ? draggableMarkup3 : null}
//         {!isDropped4 ? draggableMarkup4 : null}
//         {!isDropped5 ? draggableMarkup5 : null}
//         </div>
//       <div className='draggable2'>
//       <div className='drag'>
//       <Droppable>
//         {isDropped ? draggableMarkup : 'Drop here'}
//       </Droppable>

//       </div>
//       <div className='drag1'>
   
//       <Droppable1>
//       {isDropped1 ? draggableMarkup1 : 'Drop here'}
//       </Droppable1>

// </div>
//    <div className='drag2'>
//    <Droppable2>
//       {isDropped2 ? draggableMarkup2 : 'Drop here'}
//       </Droppable2>

// </div>
//    <div className='drag3'>
//    <Droppable3>
//       {isDropped3 ? draggableMarkup3 : 'Drop here'}
//       </Droppable3>

// </div>
//    <div className='drag4'>

//    <Droppable4>
//       {isDropped4 ? draggableMarkup4 : 'Drop here'}
//       </Droppable4>

// </div>
//    <div className='drag5'>
 
//    <Droppable5>
//       {isDropped5 ? draggableMarkup5 : 'Drop here'}
//       </Droppable5>
// </div>
//       </div>
//       </div>
//     </DndContext>
//   );
  
//   function handleDragEnd(event) {
//     <div id="back"></div>
//     if (event.over && event.over.id === 'droppable') {
//       setIsDropped(true);
//     }
//        if (event.over && event.over.id === 'droppable1') {
//       setIsDropped1(true);
//     }
//       if (event.over && event.over.id === 'droppable2') {
//       setIsDropped2(true);
//     }
//     if (event.over && event.over.id === 'droppable3') {
//       setIsDropped3(true);
//     }
//     if (event.over && event.over.id === 'droppable4') {
//       setIsDropped4(true);
//     }
//     if (event.over && event.over.id === 'droppable5') {
//       setIsDropped5(true);
//     }
//     if(event.over){
   
//     }
//   }
// }
// export default App;

import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,

  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import "./App.css";
import Droppable from "./Droppable";
import Draggable from "./Draggable";

function App() {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const images = [
    {id: "draggable", src: "/images/icecube.png"},
    {id: "draggable1", src: "/images/bgwhiskey.png"},
    {id: "draggable2", src: "/images/bgcola.png"},
    {id: "draggable3", src: "/images/bgsoda.png"},
    {id: "draggable4", src: "/images/bgorange.png"},
    {id: "draggable5", src: "/images/lemon.png"},
  ];

  const [isDropped, setIsDropped] = useState(Array(images.length).fill(false));

  function handleDragEnd(event) {
    images.forEach((image, index) => {
      if (event.over && event.over.id === `droppable${index}`) {
        const newIsDropped = [...isDropped];
        newIsDropped[index] = true;
        setIsDropped(newIsDropped);
      }
    });
  }
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="section">
        <div className="draggable">
          {images.map((image, index) => (
            !isDropped[index] ? (
              <Draggable id={image.id} key={image.id}>
                <div className="drag_item">
                  <img src={image.src} width={"50px"} alt="oops" />
                </div>
              </Draggable>
            ) : null
          ))}
        </div>
        <div className="draggable2">
          {images.map((image, index) => (
            <Droppable id={`droppable${index}`} key={`droppable${index}`}>
              {isDropped[index] ? (
                <Draggable id={image.id} key={image.id}>
                  <div className="drag_item">
                    <img src={image.src} width={"50px"} alt="oops" />
                  </div>
                </Draggable>
              ) : (
                "Drop here"
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DndContext>
  );

}
=======
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Droppable from "./components/Droppable";
import Item from "./components/Item";
import { arrayMove, insertAtIndex, removeAtIndex } from "./utils/array";

import "./App.css";

function App() {
  const [itemGroups, setItemGroups] = useState({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
   
  });
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = ({ active, over }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex =
          over.id in itemGroups
            ? itemGroups[overContainer].length + 1
            : over.data.current.sortable.index;

        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex =
        over.id in itemGroups
          ? itemGroups[overContainer].length + 1
          : over.data.current.sortable.index;

      setItemGroups((itemGroups) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...itemGroups,
            [overContainer]: arrayMove(
              itemGroups[overContainer],
              activeIndex,
              overIndex
            ),
          };
        } else {
          newItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }

        return newItems;
      });
    }

    setActiveId(null);
  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="container">
        {Object.keys(itemGroups).map((group) => (
          <Droppable
            id={group}
            items={itemGroups[group]}
            activeId={activeId}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>{activeId ? <Item id={activeId} dragOverlay/> : null}</DragOverlay>
    </DndContext>
  );
}


export default App;
