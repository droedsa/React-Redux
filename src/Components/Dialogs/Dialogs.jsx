import React from "react";
import classes from "./Dialogs.module.css"
import Dialog_item from "./Dialog_item/Dialog_item";
import Message_item from "./message_item/Message_item";


const Dialogs = (props) => {
    let newMessageText = React.createRef();

    let sendNewMessage = () => {
        props.sendMessage();
    };

    let updateMessageText = () => {
        let text = newMessageText.current.value;
        props.messageTextUpdate(text);
    };


    // eslint-disable-next-line react/jsx-pascal-case
    let dialogElement = props.messagesPage.dialogData.map(dialog => <Dialog_item name={dialog.name} id={dialog.id}/>);
    // eslint-disable-next-line react/jsx-pascal-case
    let messageElement = props.messagesPage.messageData.map(message => <Message_item message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_item}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div className={classes.messageBox}>
                    <div >
                        <textarea value={props.messagesPage.newMessageBody}
                                  onChange={updateMessageText}
                                  ref={newMessageText}
                                  placeholder='Enter you message'/>
                    </div>
                    <div>
                        <button onClick={sendNewMessage}> Send </button>
                    </div>

                </div>


            </div>
        </div>
    )
};

export default Dialogs;