import React, { Component } from 'react'

class Discussion extends Component {


    render() {
        let { data } = this.props
        let rows = []
        data.forEach(element => {
            rows.push(
                <div style={{ marginTop: '15px' }}>
                    <div className='pull-left' style={{ color: 'red' }}> <i class="fa fa-user circle-icon" aria-hidden="true"></i> {element.get('user')} &nbsp;</div>
                    <div className='pull-left' style={{ color: 'gray', lineHeight: '25px' }}>{element.get('dated')} &nbsp;</div> <br />
                    <div style={{ marginTop: '5px', marginLeft: '25px' }}>{element.get('Qus')}</div>
                </div>
            )
        });
        return (
            <div className='row'>
                <div className='col-md-9'>
                    <textarea style={{ width: '100%' }} />
                </div>
                <div className='col-md-3'>
                    <div className='btn btn-danger'>submit </div>
                </div>
                <div className='col-md-12'>
                    {rows}
                </div >
            </div >
        )
    }
}

export default Discussion