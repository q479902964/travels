import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Link } from 'react-router-dom'

import PublicHeader from '../../components/header/header'
import Conditions from '../../components/conditions/conditions'
import Popularity from '../../components/popularity_list/popularity_list'
import Travel_box from '../../components/travel_box/travel_box'

import './home.less'
class Home extends Component{
    render(){
        return(
            <div className='home'>
                <PublicHeader/>
                <div className='wrapper'>
                    <div className='left-box'>
                        <Conditions/>
                        <Popularity/>
                    </div>
                    <div className='right-box'>
                        <Link to={"/detail/1"}><Travel_box/></Link>
                        <Travel_box/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;