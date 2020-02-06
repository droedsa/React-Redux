import React from "react";
import preloadGif from '../../Asets/img/Preloader.gif';

let Preloader = (props) => {
    return <div>
        <img src={preloadGif} alt=""/>
    </div>
};

export default Preloader;