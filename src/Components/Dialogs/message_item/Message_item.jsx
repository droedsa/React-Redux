import React from "react";
import classes from "./../Dialogs.module.css"

const Message_item = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
};

export default Message_item;