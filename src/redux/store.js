//store OOP
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    post: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
                },
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  //patern observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);

        this._callSubscriber(this._state);
    }
};




window.store = store;
export default store;