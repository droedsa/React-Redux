import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {
    followActionCreator, setCurrentPageCreator,
    setUsersActionCreator,
    setUsersCountCreator,
    unFollowActionCreator
} from "../../redux/UsersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        postCount: state.usersPage.postCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setUserCount: (usersCount) => {
            dispatch(setUsersCountCreator(usersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage))
        }
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserContainer;