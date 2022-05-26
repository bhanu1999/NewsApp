import React, { Component } from 'react'

export default class SpinnerComp extends Component {

  render() {
    return (
      <div style={{margin:"300px"}} className='text-center'><img src='loading.gif' alt='loading'></img></div>
    )
  }
}
