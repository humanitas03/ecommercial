import React,{ Component }  from 'react';
import { NavLink } from 'react-router-dom';
class BoardList extends Component{
    _goPage=()=>{
        window.location.href=`/Board/BoardDetail/${this.props.id}`;
    }
    render(){
        return(
                
                <tr onClick={this._goPage}>
                    <td>{this.props.id}</td>
                    <td>{this.props.board_title}</td>
                    <td>{this.props.createdAt}</td>
                </tr>
                
        );
    }

}
// const BoardList = ({id,board_title,board_content,createdAt}) =>{
//     return(
        
//             <tr>
//                 <td>{id}</td>
//                 <td>{board_title}</td>
//                 <td>{createdAt}</td>
//             </tr>
        
//     );
// }

export default BoardList;