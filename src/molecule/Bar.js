import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
const Bar = () =>{
    return (
        <DndProvider backend={HTML5Backend}>

        </DndProvider>
    );
}

export default Bar;