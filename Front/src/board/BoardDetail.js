import React, { Component } from 'react';
import { API_BASE_URL } from '../constants';

class BoardDetail extends Component{

    constructor(props){
        super(props);
        this._boardDetail();
    }
    state={
        json :{
            board_title :""
            ,board_content:""
            ,createdAt:""
        }
    }


    _boardDetail = () =>{
        if(this.props.match.params.id!=undefined){
        fetch(API_BASE_URL+'/board/post/content/'+this.props.match.params.id)
            .then(response =>{
                return response.json();
            })
            .then(json=>{
                this.setState({json}) ;
                console.log(this.state);
                return json;
            })
            .catch(err=>{
                alert('오류가 발생하였습니다.');
                console.log(err);
            });

        }else{
            alert("조회에 실패하였습니다.");
            window.location.href='/board';
        }
    }

    _delBoard = () => {
        fetch(API_BASE_URL+'/board/post/'+this.props.match.params.id
            ,{
                "method": 'delete'
                ,headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                } 
            }).then(response =>{
                if (response.ok) {
                    alert('삭제에 성공하였습니다.');
                    window.location.href='/board';
                }else{
                    alert('삭제에 실패하였습니다.');    
                }
            }).catch(err=>{
                alert('오류가 발생하였습니다.');
                console.log(err);
            })
    }

    _back = () =>{
        window.location.href="/Board";
    }

    render(){
        return(
            <div className="div-form">
                <h2>Vertical (basic) form</h2>
                <div className="form-group">
                    <label >제목</label>
                    <input type="title" className="form-control" id="title" disabled value={this.state.json.board_title} />
                </div>
                <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content" disabled value={this.state.json.board_content} ></textarea>
                </div>
                <div className="form-group">
                    <label >작성시간</label>
                    <textarea className="form-control" rows="5" id="createdAt" disabled value={this.state.json.createdAt} ></textarea>
                </div>
                <div className="div-button">
                    <button type="button" className="btn btn-primary" onClick={this._delBoard}>삭제</button>&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this._back}>뒤로가기</button>
                </div>
            </div>
        );
    }
}

export default BoardDetail;