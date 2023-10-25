import React from "react";
import {Button} from "antd";

function ButtonCustom(props){
    return (
        <Button type="primary">{props.Name}</Button>
    )
}

export default ButtonCustom;
