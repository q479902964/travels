import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import dragula from 'dragula'
import Sortable from 'sortablejs'

import PublicHeader from '../../components/header/header'
import './detail.less';
import axios from 'axios';


class Detail extends Component{
   state = {
       location:[]
   }

    componentDidMount(){
        this.initData();
        let options = {
            revertOnSpill: true, // 溢出会将元素放回到被拖动的位置
            mirrorContainer: document.body // 设置获取镜像元素的元素
            // moves: function (el, source, handle, sibling) {
            //     return true; // 元素默认是可拖动的 可设置预期的拖动元素
            // }
        }
        dragula([document.getElementById('router')]).on('drag', function (el) {
            // console.log(el);
            // el.className = el.className.replace(' animazing', '');
            options.mirrorContainer = el;
        });
        // var el = document.getElementById('router');
        // Sortable.create(el,{});
   }

   initData = ()=>{
       try{
           var id = this.props.match.params.id;
           var _this = this;
           if(id){
               axios.get('/getTravel/'+id)
                   .then(function (response){
                       console.log(response.data);
                       var data = response.data.data;
                       var regExp = /\[.*?\]/g;
                       var str = data.routes;
                       if(str.match(regExp)){
                           str = eval('(' + str + ')');
                       }
                       _this.setState({
                           title:data.title,
                           content:data.content,
                           location:str
                       },()=>{
                           console.log(_this.state.List);
                       })
                   })
                   .catch(function (error) {
                       console.log(error);
                   });
           }
       }catch (err){
           throw(err);
       }
   }

    GetTravels(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var update =year + "-"+month+"-"+strDate;
        var travel = ReactDOM.findDOMNode(this.refs.edit_area).innerText;
        var title = ReactDOM.findDOMNode(this.refs.edit_title).innerText;
        if(travel.trim()==""||title.trim()==""){
            alert("标题或内容不能为空");
        }
        var _this = this
        try{
            axios.post('/travels',{
                id:this.props.match.params.id,
                travels: travel,
                date:update,
                title:title
            })
            .then(function (response){
                console.log(response.data);
                var str = response.data;
                var regExp = /\[.*?\]/g;;
                if(str.match(regExp)){
                    str = eval('(' + str + ')');
                }
                _this.setState({
                    location:str
                },()=>{
                console.log(_this.state.location);
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }catch (err){
            throw(err);
        }
    }

    componentWillUpdate(nextProps, nextState){
        // dragula([document.getElementById('router')])
    }

    render(){
        return(
            <div className='detail'>
                <PublicHeader/>
                <div className="edit_box">
                    <div className="title">游记编辑</div>
                    <div className="title_area">
                        <span>标题：</span>
                        <span contentEditable="true" className="edit_title" ref="edit_title">{this.state.title}</span>
                    </div>
                    <div className="edit_area" contentEditable="true" ref="edit_area">{this.state.content}</div>
                    <div className="btn_travel" onClick={this.GetTravels.bind(this)}>得出路线</div>
                    <div className="correction_area">
                        <div className="co_title">游记路线</div>
                        <div className="router" >
                                <ul id="router">
                                        {
                                            this.state.location!=[]?
                                                this.state.location.map((item,index)=>{
                                                return (
                                                    <div>
                                                        <li><span className={'arrow'}>-></span></li>
                                                        <li><span className="route_name">{item}</span></li>
                                                    </div>
                                                )
                                            })
                                            :""
                                        }
                                    {/*<li><span className={'hidden'}>-></span></li>*/}
                                    {/*<li><span className="route_name">广州</span></li>*/}
                                    {/*<li><span className={'arrow'}>-></span></li>*/}
                                    {/*<li><span className="route_name">佛山</span></li>*/}
                                    {/*<li><span className={'arrow'}>-></span></li>*/}
                                    {/*<li><span className="route_name">南海</span></li>*/}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;