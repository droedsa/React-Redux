import React from "react";
import classes from './myPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postElement = props.postDatta.map(p=><Post message={p.post}/>)
    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.addNewPost();
    };

    let onChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    };

    return (
        <div className={classes.postBlock}>
            <h3>My posts :</h3>
            <div>
                <div>
                    <textarea onChange={onChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Send</button>
                </div>

            </div>

            <div className={classes.myPosts}>
                {postElement}
            </div>
        </div>
    );
};


export default MyPosts;

