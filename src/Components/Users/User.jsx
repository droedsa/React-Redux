import React from "react";
import classes from './User.module.css'
import userPhoto from './../../Asets/img/275px-Sturmmöwe_-_Auenlandschaft_Hohenrode_HA_222_Landkreis_Schaumburg.jpg';


let Users = (props) => {
    let pageCount = Math.ceil(props.usersCount / props.postCount);
    let pagesArr = [];

    for (let i = 1; i < pageCount; i++) {
        pagesArr[i] = i;
    }
    return <div>
        <div className={classes.pages}>
            {
                pagesArr.map(p => {
                    return <div onClick={() => { props.changePage(p) }}
                                className={props.currentPage === p && classes.currentPage}> {p} </div>

                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt=""
                            className={classes.avatarImg}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.country}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
};

export default Users;