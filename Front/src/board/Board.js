import React,{ Component }  from 'react';
import {Route , NavLink,Switch} from 'react-router-dom';
import { API_BASE_URL ,ACCESS_TOKEN} from '../constants';
import BoardList from './BoardList';
import BoardFooter from './BoardFooter';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import './Board.css';

class Board extends Component{

    constructor(props){
        super(props);
        this._pageChange = this._pageChange.bind(this);
    }
   
    state={
        board           : []
        ,number         : -1
        ,totalPages     : -1
    }
    componentDidMount() {
        this._getBoard();
    }

    

    _getBoard = async(page) => {
        const board = await this._callAPI(page);

        let viewBoard   = board.content;
        let number      = board.number;
        let totalPages  = board.totalPages;  
        
        return this.setState({
            board           : viewBoard
            ,number         : number
            ,totalPages     : totalPages
        });
        
        
    }

    _callAPI= async(page)=>{
    	let goPage = (page == -1  || page == undefined || page <= 0 ) ? '0' : page-1;
        return fetch(API_BASE_URL+'/board/post/'+goPage
                ,{
                "method": 'get'
                ,headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
                } 
            })
                .then(response => response.json())
                .catch(err => console.log(err));
    }

    _renderBoard = (page) => {
    	
        const board = (this.state.board || []).map( (board,index) => {
            return <BoardList
                        key             = {index}
                        id              = {board.id}
                        board_title     = {board.board_title}
                        board_userId    = {board.board_userId}
                        board_content   = {board.board_content}
                        createdAt       = {board.createdAt}
                        updatedAt       = {board.updatedAt}
                    />;
       });
        return board;
    	
       
    }

    _boardNext = (page) =>{
        if(page == '#') return;
        let goPage = (page == -1  || page == undefined || page<0 ) ? '0' : page;
        
        this._getBoard(goPage);
    }

    _pageChange(data){
        //console.log(data["target"].dataset.page);
        this._boardNext(data["target"].dataset.page);
    }

    render() {
        return(
            <div className="containerBoard">
                <Switch>
                <Route path="/Board/BoardWrite" component={BoardWrite}></Route>
                <Route path="/Board/BoardDetail/:id" component={BoardDetail}></Route>
                <Route path="/Board">
                    <div>
                        <div className="table-top-div">
                            <NavLink to="/Board/BoardWrite">
                                <button type="button" className="btn btn-primary">
                                    
                                        글쓰기
                                    
                                </button>
                            </NavLink>
                        </div>
                        <table className="table table-condensed">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>제목</th>
                                <th>작성일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this._renderBoard()}
                        </tbody>
                        </table>
                        <BoardFooter
                        
                        number = {this.state.number}
                        totalPages = {this.state.totalPages}
                        _pageChange = {this._pageChange}
                        />    
                    </div>
                </Route>

                </Switch>
            </div>
            
        );
    }

}

export default Board;