const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SET_CURRENT_PAGE';
const SETUSERCOUNT = 'SET_PAGE_NUMBERS';
const  PRELOADER = 'PRELOADER';

let initialState = {
    users: [],
    usersCount : 0,
    postCount:4,
    currentPage:1,
    isFetching:false
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
                users: [...action.users],
                usersCount: action.usersCount
            };
        case SETUSERCOUNT:{
            return {
                ...state,
                usersCount: action.usersCount
            }
        }
        case SETCURRENTPAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case PRELOADER:{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const followActionCreator = (userID) => ({type: 'FOLLOW', userID: userID});
export const unFollowActionCreator = (userID) => ({type: 'UNFOLLOW', userID: userID});
export const setUsersActionCreator = (users,usersCount) => ({type: 'SETUSERS', users: users});
export const setUsersCountCreator = (usersCount) => ({type: 'SET_PAGE_NUMBERS', usersCount});
export const setCurrentPageCreator = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setPreLoaderCreator = (isFetching) => ({type: 'PRELOADER', isFetching});
export default usersReducer;