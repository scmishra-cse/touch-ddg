import React, {useState} from "react";
import {
  DndContext,
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
export default App;
