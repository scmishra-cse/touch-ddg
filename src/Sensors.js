import { DndContext, MouseSensor,TouchSensor, useSensor } from "@dnd-kit/core";

export const DragDropContainer=()=>{
    const mouseSensor= useSensor(MouseSensor);
    const touchSensor= useSensor(TouchSensor);
    const sensor= useSensor(mouseSensor,touchSensor)
    return (<DndContext sensors={sensor}>.....</DndContext>)
}