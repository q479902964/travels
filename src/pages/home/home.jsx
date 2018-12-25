import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Link } from 'react-router-dom'

import PublicHeader from '../../components/header/header'
import Conditions from '../../components/conditions/conditions'
import Popularity from '../../components/popularity_list/popularity_list'
import Travel_box from '../../components/travel_box/travel_box'

import './home.less'
import axios from "axios/index";
class Home extends Component{

    state = {
        // img:['http://b4-q.mafengwo.net/s11/M00/C7/E2/wKgBEFrUZ4OAfV2tAA99nuKhouQ84.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        //     'http://p4-q.mafengwo.net/s12/M00/D6/6C/wKgED1wd-0qAEhA8AAJ_DjDxwTo78.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        //     'http://b4-q.mafengwo.net/s12/M00/35/87/wKgED1wdAMWAVqmqAAmIH6WZ74k61.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90'
        // ],
        // title:['西关小姐与东山少爷 ------ 初识老广州','广州动物园一日游','广州陈家祠'],
        // author:['坐等青春散尽','吃货小明儿','跟着老公去旅行'],
        // date:['2018年04月17日','2018年12月22日','2018年12月21日'],
        // com:[169,12,100],
        // content:['一周年有感 2017年4月来到 广州 ，虽然期间断断续续，来来回回，到今天也勉强算在 广州 呆了一整年。 广州 是一座具有2000多...',
        //           '隔了好久才发上个周末的照片 恭喜XGG第一次去到 广州 动物园🎉 🎉 🎉 大象的豪宅，打滚的斑马，呆萌的老虎，夕阳下的犀牛，...',
        //           '记录一下陈家祠'
        // ],
        // icon:['http://b4-q.mafengwo.net/s11/M00/88/D6/wKgBEFq8b3OAIWnNAAc2GLxWPbA38.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        //        'http://p3-q.mafengwo.net/s12/M00/74/CC/wKgED1wbSGSADeHCAAB36iic9wE40.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        //        'http://b2-q.mafengwo.net/s10/M00/47/BD/wKgBZ1nKhNOASvn7AABRYN5mVuw16.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90'
        //     ],
        // routes:['东山地铁口->龟岗->寺贝通津一带->陈家祠->西关大屋->荔湾湖公园->荔枝湾->沙面->上下九步行街',
        //          '斑马->老虎->犀牛->小浣熊->长颈鹿宿舍->火焰鸟',
        //         '陈氏书院->广东民间工艺博物馆->聚贤堂'
        //         ]
        List:[]
    }

    componentDidMount(){
        this.initData();
    }
    initData = ()=>{
        try{
            var _this = this
            axios.get('/getList')
                .then(function (response){
                    console.log(response.data);
                    var data = response.data.data;
                    _this.setState({
                        List:data
                    },()=>{
                        console.log(_this.state.List);
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }catch (err){
            throw(err);
        }
    }
    deleteTravel(){
        this.initData();
    }

    render(){
        // var data = ()=>{
        //     var res = [];
        //     for(var i=0;i<this.state.img.length;i++){
        //         res.push(<Travel_box img={this.state.img[i]} title={this.state.title[i]} author={this.state.author[i]} date={this.state.date[i]} com={this.state.com[i]} content={this.state.content[i]} icon={this.state.icon[i]} routes={this.state.routes[i]}/>)
        //     }
        //     return res;
        // }
        return(
            <div className='home'>
                <PublicHeader/>
                <div className='wrapper'>
                    {
                        this.state.List.map((item)=>{
                            return (
                                <Link to={"/detail/"+item.id}>
                                    <Travel_box id={item.id} img={item.img} title={item.title} author={item.username} date={item.date} content={item.content} icon={item.icon} routes={item.routes} deleteTravel={this.deleteTravel.bind(this)}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Home;