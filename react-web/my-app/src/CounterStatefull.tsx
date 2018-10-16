// import {Props} from "react";
import * as React from 'react';
// import {Props} from "react";
import randomHexColourGenerator from './HexGenerator';
import './CounterStatefull.css';

interface Props {
    startingCount?: number;
}

interface State {
    startingCount: number;
    isCounting: boolean;
    currentColour: string;
}

class CounterStatefull extends React.Component<Props, State> {
    private timer: number; // timer id

    constructor(props: Props){
        super(props);
        this.state = {
            startingCount: props.startingCount || 0,
            isCounting: true,
            currentColour: randomHexColourGenerator({range: 10})
        };

        this.timer = window.setInterval((): void =>{
            this.setState(
                {
                    startingCount: this.state.startingCount + 1,
                    currentColour: randomHexColourGenerator({range: 10})
                });
        }, 1000);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    private toggleIsCountingState(): void{
        this.setState({isCounting: !this.state.isCounting});
    }

    private start(): void{
        if(!this.state.isCounting){
            this.toggleIsCountingState();
            this.timer = window.setInterval((): void =>{
                this.setState({
                    startingCount: this.state.startingCount + 1,
                    currentColour: randomHexColourGenerator({range: 10})
                });
            }, 1000);
        }
    }

    private stop(): void{
        if(this.state.isCounting){
            this.toggleIsCountingState();
            window.clearInterval(this.timer);
        }
    }

    render(): JSX.Element{
        return (
            <div className="counterContainer">
                <button onClick={this.start}> start </button>
                <button onClick={this.stop}> stop </button>
                <h3 style={{color: this.state.currentColour}}> {this.state.startingCount} </h3>
            </div>
        );
    }
}

export default CounterStatefull;