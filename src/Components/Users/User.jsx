import React from "react";
import classes from "./User.module.css"
import * as axios from "axios";
import userPhoto from './../../Asets/img/275px-Sturmmöwe_-_Auenlandschaft_Hohenrode_HA_222_Landkreis_Schaumburg.jpg';

class Users extends React.Component {
    Jget = () =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.postCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.totalCount);
        });
    };

    componentDidMount() {
        this.Jget();
    }



    changePage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.Jget();
    };

    render() {
        debugger;
        let pageCount = Math.ceil(this.props.usersCount/this.props.postCount);
        let pagesArr = [];

        for (let i = 1; i < pageCount; i++){
            pagesArr[i] = i;
        }

        return <div>
            <div className={classes.pages}>
                { pagesArr.map( p => {
                        return <div onClick={ ()=> {this.changePage(p)}} className={this.props.currentPage === p && classes.selectedPage}>{p}</div>
                    })
                }
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt=""
                            className={classes.avatarImg}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
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
    }
}

export default Users;