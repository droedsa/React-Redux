import React from "react";
import classes from './Profile_info.module.css';


const Profile_info = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mainImg}>
                <img src="http://pics.tech4learning.com/images/pics-banner1-1300.jpg" className='content-img'/>
            </div>
            <div className={classes.discriptionBlock}>
                <div className={classes.avatar}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/>
                </div>
                <div className={classes.discription}>
                    <p>Ivan Vlasenko</p>
                    <p>19 y.old</p>
                    <p>Ukraine Kiev</p>


                </div>

            </div>
        </div>
    );
};

export default Profile_info;

