import React, { Component } from 'react'

class LeaderBoard extends Component {
    render() {
        let rows = []
        this.props.data.forEach(element => {
            rows.push(<tr>
                <td>{element.get('participants')}</td>
                <td>{element.get('totalScore')}</td>
                <td>{element.get('attempts')}</td>
                <td>{element.get('lastSubmitted')}</td>
            </tr>)
        });
        return (
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            
                            <th>Participants</th>
                            <th>Total Score</th>
                            <th>Attemps</th>
                            <th>Last Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                       {rows}
                    </tbody>
                </table>
        )
    }
}

export default LeaderBoard