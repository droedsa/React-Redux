import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
        postDatta: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps =(dispatch)=>{
    return{
        addNewPost: ()=>{
            dispatch(addPostCreator());
        },
        updatePostText: (text)=>{
            dispatch(updateNewPostTextCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

