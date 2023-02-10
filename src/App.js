// import React, {useState} from "react";
// import {
//   DndContext,
//   MouseSensor,
//   TouchSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import "./App.css";
// import Droppable from "./Droppable";
// import Draggable from "./Draggable";

// function App() {
//   const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
//   const images = [
//     {id: "draggable", src: "/images/icecube.png"},
//     {id: "draggable1", src: "/images/bgwhiskey.png"},
//     {id: "draggable2", src: "/images/bgcola.png"},
//     {id: "draggable3", src: "/images/bgsoda.png"},
//     {id: "draggable4", src: "/images/bgorange.png"},
//     {id: "draggable5", src: "/images/lemon.png"},
//   ];

//   const [isDropped, setIsDropped] = useState(Array(images.length).fill(false));

//   function handleDragEnd(event) {
//     images.forEach((image, index) => {
//       if (event.over && event.over.id === `droppable${index}`) {
//         const newIsDropped = [...isDropped];
//         newIsDropped[index] = true;
//         setIsDropped(newIsDropped);
//       }
//     });
//   }
//   return (
//     <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
//       <div className="section">
//         <div className="draggable">
//           {images.map((image, index) => (
//             !isDropped[index] ? (
//               <Draggable id={image.id} key={image.id}>
//                 <div className="drag_item">
//                   <img src={image.src} width={"50px"} alt="oops" />
//                 </div>
//               </Draggable>
//             ) : null
//           ))}
//         </div>
//         <div className="draggable2">
//           {images.map((image, index) => (
//             <Droppable id={`droppable${index}`} key={`droppable${index}`}>
//               {isDropped[index] ? (
//                 <Draggable id={image.id} key={image.id}>
//                   <div className="drag_item">
//                     <img src={image.src} width={"50px"} alt="oops" />
//                   </div>
//                 </Draggable>
//               ) : (
//                 "Drop here"
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </div>
//     </DndContext>
//   );

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
