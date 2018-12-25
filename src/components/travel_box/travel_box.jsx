import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './travel_box.less'
import axios from "axios/index";

class Travel_box extends Component{
    deleteTravel(e){
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var _this = this;
        axios.post('/deleteTravel',{
            id:this.props.id
            })
            .then(function (response){
                var data = response.data;
                if(data.code==1){
                    console.log("删除成功!");
                    _this.props.deleteTravel();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        var routes = ()=>{
            var regExp = /\[.*?\]/g;
            var str = this.props.routes;
            if(str.match(regExp)) {
                str = eval('(' + str + ')');
            }
            return str;
        }
        return(
            <div className='travel_box'>
                <div className="delete_Travel" onClick={this.deleteTravel.bind(this)}>×</div>
                <div className='left_box'>
                    <img src={this.props.img} className='bg_img'/>
                </div>
                <div className='right_box'>
                    <div className='basic_content'>
                        <img className='icon' src={require('./title.png')}></img>
                        <h1>{this.props.title}</h1>
                        <div className='author'>作者：<span>{this.props.author}</span></div>
                        <span className='date'>{this.props.date}</span>
                        {/*<div className='menu_info'><i></i><span className='num'>{this.props.com}</span></div>*/}
                        {/*<div className='menu_info'><i></i><span className='num'>30</span></div>*/}
                        {/*<div className='menu_info'><i></i><span className='num'>536</span></div>*/}
                    </div>
                    <p className='main_content'>{this.props.content}</p>
                </div>
                <div className='travel_route'>
                    <div>游记路线：</div>
                    <ul>
                        {
                            routes().map((item)=>{
                                return(
                                    <div>
                                        <li>-></li>
                                        <li>{item}</li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Travel_box;