import React,{ Component }  from 'react';
import './adminproductinsert.css';

class adminproductinsert extends Component{

render(){
   return(
    <div>
   <p>bike_seq : <input type="text" name="bike_seq" /></p>
   <p>bike_cc : <input type="text" name="bike_cc" /></p>
   <p>bike_orig_price : <input type="text" name="bike_orig_price" /></p>
   <p>bike_brand : <input type="text" name="bike_brand" /></p>
   <p>bike_ctry : <input type="text" name="bike_ctry"/></p>
   <p>bike_kind : <input type="text" name="bike_kind"/></p>
   <button onClick={this.handleClick}>등록</button>
    </div>  
  );
}
}
export default adminproductinsert;