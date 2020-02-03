import React from "react";
import classes from "./User.module.css"


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: true, fullName: 'Ivan', status: 'HeLLo', loc: {country: 'Ukraine', city: 'Kiev'}},
            {id: 2, followed: false, fullName: 'Ivan', status: 'HeLLo', loc: {country: 'Ukraine', city: 'Kiev'}},
            {id: 3, followed: false, fullName: 'Ivan', status: 'HeLLo', loc: {country: 'Ukraine', city: 'Kiev'}},
            {id: 4, followed: true, fullName: 'Ivan', status: 'HeLLo', loc: {country: 'Ukraine', city: 'Kiev'}}
        ]);
    }

    console.log(props);
    return <div> {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img
                        src="https://lh6.googleusercontent.com/proxy/Dr2lbgcGvlneHAkNluQq8q2hHa15ap3e1AmfWBd5OuiU-uV_r5Ma7PtdtD5v5htZQoQXr_ddKTrM6G5MXjqzsAaAN_I0aO28kNN6nYCoH4EocxWi8HVaX9xySee-Tok-W6e7pEQ4lZsA"
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
                        <div>{u.fullName}</div>
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