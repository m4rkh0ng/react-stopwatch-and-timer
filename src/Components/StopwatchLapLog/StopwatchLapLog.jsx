import * as React from 'react';


export default class StopwatchLapLog extends React.Component {

    render() {
        const rows = this.props.timerLaps.map((lapTime, index) => 
            <tr key={++index}>
                <td>{index}</td>
                <td>{laptime}</td>
            </tr>
    );

    return (
         <table id="lap-times">
             <thead>
                 <th>Lap</th>
                 <th>Time</th>
             </thead>
             <tbody>{rows}</tbody>
         </table>
    );
}

}