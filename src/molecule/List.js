import React from "react";
import Line from "../components/Line";


const List = () => {
    const arrName = ["Sass","C"];
    return (
        arrName.map((element) =>{
            return <Line Name={element} />
        })
    );
}

export default List;