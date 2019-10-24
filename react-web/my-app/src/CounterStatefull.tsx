// import {Props} from "react";
import * as React from 'react';
// import {Props} from "react";
import randomHexColourGenerator from './HexGenerator';
import './CounterStatefull.css';

const COUNT_UP: string = "COUNT_UP"; 
const COUNT_DOWN: string = "COUNT_DOWN"; 


interface Props {
    startingCount?: number;
    onIncrement?: () => void; 
    onDecrement?: () => void; 
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
        
        if (props.startingCount !== undefined && props.startingCount < 0)
            throw new Error("starting count can't be a negative number");
        
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
        this.changeCounterState = this.changeCounterState.bind(this); 
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

    private changeCounterState(upOrDown: string): void{
        console.log("counting up or down"); 
        console.log(this.props.onDecrement); 
        
        if(upOrDown === COUNT_UP)
            if(this.props.onIncrement)
                this.props.onIncrement(); 

        if(upOrDown === COUNT_DOWN)
            if(this.props.onDecrement)
                this.props.onDecrement(); 
    }

    render(): JSX.Element{
        return (
            <div className="counterContainer">
                <button onClick={this.start}> start </button>
                <button onClick={this.stop}> stop </button>
                <button onClick={() => this.changeCounterState(COUNT_UP)}> 
                    + increment redux start count 
                </button> 
                <button onClick={() => this.changeCounterState(COUNT_DOWN)}> 
                    - increment redux start count 
                </button> 
                <h3 style={{color: this.state.currentColour}}> {this.state.startingCount} </h3>
            </div>
        );
    }

    componentDidUpdate(prevProps: Props): void {
        // Typical usage (don't forget to compare props):
        if (this.props.startingCount !== prevProps.startingCount) {
            let newCount: number = this.props.startingCount as number; 
            this.setState({startingCount: newCount});
        }
    }
}

export default CounterStatefull;