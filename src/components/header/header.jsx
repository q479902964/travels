import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.less'

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='main_box'>
                    <div className='title'>
                    <img src={require('./title.png')} className='logo'/>
                    <span className='title_text'>软三游记党</span>
                </div>
                <span className='destination'>
                    <Link to="/home">游记</Link>
                </span>
                <span className='travels_name'>
                    <Link to="/detail">目的地</Link>
                </span>
                <div className='search_box'>
                    <form>
                        <input type="text" placeholder="请输入关键字进行搜索"/>
                        <button></button>
                        <img src={require('./search.png')}  className='icon'/>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Header;