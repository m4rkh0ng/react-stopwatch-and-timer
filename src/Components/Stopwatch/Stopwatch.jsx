import * as React from 'react';
import './Stopwatch.css';

export default class Stopwatch extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    }
    
    // need a play/pause function
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        })

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    }

    stopTimer = () => {
        this.setState({ timerOn: false});
        clearInterval(this.timer);
    }

    // reset can clear and get back to 0 
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        })
    }


    // lap functionality = stretch (record whatever time it is on the action of the event firing)

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime /10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return(
            <div className="stopwatch-container">
                <div className="stopwatch-header">Stopwatch</div>
                <div className="stopwatch-time-display">{hours}:{minutes}:{seconds}:{centiseconds}</div>
                <div className="stopwatch-controls">
                    <div className="start-stop-resume">
                        {this.state.timerOn === false && this.state.timerTime === 0 && (<button className="stopwatch-button" onClick={this.startTimer}>Start</button>)}
                        {this.state.timerOn === true && (<button className="stopwatch-button" onClick={this.stopTimer}>Stop</button>)}
                        {this.state.timerOn === false && this.state.timerTime > 0 && (<button className="stopwatch-button" onClick={this.startTimer}>Resume</button>)}
                    </div>
                    <div className="resume">
                        {(this.state.timerOn === false && this.state.timerTime > 0) ? <button className="stopwatch-button" onClick={this.resetTimer}>Reset</button>: <button className="stopwatch-button" disabled onClick={this.resetTimer}>Reset</button>}
                    </div>
                </div>
            </div>
        )
    }

}