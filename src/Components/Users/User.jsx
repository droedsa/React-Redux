import React from "react";
import classes from "./User.module.css"
import * as axios from "axios";
import userPhoto from './../../Asets/img/275px-Sturmmöwe_-_Auenlandschaft_Hohenrode_HA_222_Landkreis_Schaumburg.jpg';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }

    console.log(props);
    return <div> {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto }
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