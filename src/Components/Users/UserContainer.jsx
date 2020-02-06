import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageCreator,
    setUsersActionCreator,
    setUsersCountCreator,
    unFollowActionCreator
} from "../../redux/UsersReducer";
import * as axios from "axios";
import Users from "./User";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.postCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.totalCount);
        });
    }

    changePage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.postCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.totalCount);
        });
    };

    render() {

        return <Users usersCount={this.props.usersCount}
                      postCount={this.props.postCount}
                      changePage={this.changePage}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
                      currentPage={this.props.currentPage}
        />
    }
}

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


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UserContainer;