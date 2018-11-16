import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './travel_box.less'

class Travel_box extends Component{
    render(){
        return(
            <div className='travel_box'>
                <div className='left_box'>
                    <img src={require('./test_img.jpeg')} className='bg_img'/>
                </div>
                <div className='right_box'>
                    <div className='basic_content'>
                        <img className='icon' src={require('./title.png')}></img>
                        <h1>#我要成为精华作者</h1>
                        <div className='author'>作者：<span>Ken_leung</span></div>
                        <span className='date'>2018-08-29</span>
                        <div className='menu_info'><i></i><span className='num'>38001</span></div>
                        <div className='menu_info'><i></i><span className='num'>30</span></div>
                        <div className='menu_info'><i></i><span className='num'>536</span></div>
                    </div>
                    <p className='main_content'>前言 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                </div>
                <div className='travel_route'>游记路线</div>
            </div>
        )
    }
}
export default Travel_box;