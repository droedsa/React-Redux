import React from 'react';
import './App.css';
import Header from "./Components/Header/Head";
import NavMenu from "./Components/navMenu/navMenu";
import Profile from "./Components/Profile/Profile";
// eslint-disable-next-line no-unused-vars
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContiner";
import Users from "./Components/Users/User";
import UserContainer from "./Components/Users/UserContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavMenu/>
            <div className='app-wrapper_content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UserContainer/>}/>
                {/*<Route path='/news' render={() => <News/>}/>*/}
                {/*<Route path='/settings' render={() => <Setting/>}/>*/}
            </div>
        </div>
    );
};

export default App;
