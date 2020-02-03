const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: true};
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: false};
                    return u;
                })
            };
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            };
        default:
            return state;
    }
};

export const followActionCreator = (userID) => ({type: FOLLOW, userID: userID});
export const unFollowActionCreator = (userID) => ({type: UNFOLLOW, userID: userID});
export const setUsersActionCreator = (users) => ({type: SETUSERS, users: users});
export default usersReducer;