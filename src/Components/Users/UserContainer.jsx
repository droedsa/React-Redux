import React from "react";
import {connect} from "react-redux";
import User from "./User";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/UsersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserContainer;