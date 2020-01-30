const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Yura'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Petr'},
        {id: 6, name: 'Masha'}
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Goodbye'},
        {id: 4, message: 'How are y?'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: state.newMessageBody}],
                newMessageBody: ''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    }

};

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});


export default dialogsReducer;