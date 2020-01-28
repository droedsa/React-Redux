import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let sendMessage = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//
//                 let messageTextUpdate = (text) => {
//                     store.dispatch(updateNewMessageBodyCreator(text));
//                 };
//
//                 let state = store.getState();
//
//                 return <Dialogs sendMessage={sendMessage} messageTextUpdate={messageTextUpdate}
//                                 state={state.messagesPage}/>
//             }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        },
        messageTextUpdate: (text)=>{
            dispatch(updateNewMessageBodyCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;