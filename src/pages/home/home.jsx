import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PublicHeader from '../../components/header/header'

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <PublicHeader/>
            </div>
        )
    }
}
export default Home;