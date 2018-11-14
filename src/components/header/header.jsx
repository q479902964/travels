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
                    <span className='destination'>目的地</span>
                    <span className='travels_name'>游记</span>
                    <img className="head_portrait" src={require('./icon.png')}/>
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