import React,{Component} from 'react';
import BoardCount from './BoardCount';

class BoardFooter extends Component{

    constructor(props) { 
        super(props); 
         
    } 

    _renderBoardFooter = () => {
        
        let result = []; 
        const one = this.props.number - (this.props.number % 10) + 1 ;
        const last = one + 9 > this.props.totalPages ? this.props.totalPages : one + 9;
        
        for(var num=one ; num <= last ; num++){
            result.push(this._getCountA(num));
        }
        return result;
    }

    _getCountA = (a) =>{
        let active = a == this.props.number+1 ? 'active' : '' ;
        return <li className={active} key={a} ><a data-page={a} key={a}  onClick={this.props._pageChange} key={a}>&nbsp; {a} &nbsp;</a></li>;
    }

  
//onClick={this._pageChange.bind(this)}
    render(){
        const number = this.props.number;
        const totalPages = this.props.totalPages;
        const pre = (number - 10) > 0 ? number - 10 + 1  : 0  ;
        const next = (number + 10) < totalPages ? number + 10 + 1 : totalPages ;
        
        return(
            <div className='center' >
                <ul className="pagination">
                    <li><a data-page={pre} value='<' onClick={this.props._pageChange}>&nbsp; &lt; &nbsp;</a></li>
                    {this._renderBoardFooter()}
                    <li><a data-page={next} value='>'  onClick={this.props._pageChange}>&nbsp; &gt; &nbsp;</a></li>
                </ul>
            </div>
        );
    }

}
export default BoardFooter;