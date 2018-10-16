import * as React from 'react';
// import {Component, StatelessComponent} from "react";

interface Props {
    stars: number
}

// stateless component
function DummyStateless(props :Props): JSX.Element{
    let stars: number = props.stars;
    // @ts-ignore
    const t: number = window.setInterval((): void => {
       stars++;
       let h2Tag: HTMLElement | null = document.getElementById("stars");

       if(h2Tag != null){
           h2Tag.innerText = stars.toString();
       }
    },1000);

    return (
        <h2 id="stars"> {stars} </h2>
    );
}



export default DummyStateless;