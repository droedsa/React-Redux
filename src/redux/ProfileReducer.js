const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postData: [
        {
            id: 1,
            post: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                postData: [...state.postData, {id: 5, post: state.newPostText}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default :
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;