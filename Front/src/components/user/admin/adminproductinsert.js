import React,{ Component }  from 'react';
import './adminproductinsert.css';

class adminproductinsert extends Component{

render(){
   return(

    
    <div className="ibox float-e-margins">
      <div className="ibox-title">
        <h5>판매 > BIKE INFO <small></small></h5>
      </div>
      <div className="ibox-content">
        <form className="form-horizontal">
          <input type="hidden" name="bikeSeq" />
          <div className="form-group"><label className="col-sm-2 control-label">바이크 명</label>
            <div className="col-sm-10"><input type="text" className="form-control" name="bikeName"/></div>
          </div>
          {/* 
          <div className="form-group"><label className="col-sm-1 control-label">바이크 명</label>
            <div className="col-sm-5"><input type="text" className="form-control" name="bikeName"/></div>
            <label className="col-sm-1 control-label">바이크 명</label>
            <div className="col-sm-5"><input type="text" className="form-control" name="bikeName"/></div>
          </div> 
          */}
          <div className="form-group"><label className="col-sm-2 control-label">배기량</label>
            <div className="col-sm-10"><input type="text" className="form-control" name="bikeCc"/></div>
          </div>
          <div className="hr-line-dashed" />
          <div className="form-group"><label className="col-sm-2 control-label">출시가</label>
            <div className="col-sm-10"><input type="number" className="form-control" name="bikeOrigPrice" />
            </div>
          </div>
          <div className="hr-line-dashed" />
          <div className="form-group"><label className="col-sm-2 control-label">브랜드</label>
            <div className="col-sm-10"><input type="text" className="form-control" name="bikeBrand" /></div>
          </div>
          <div className="hr-line-dashed" />
          <div className="form-group"><label className="col-sm-2 control-label">제조사</label>
            <div className="col-sm-10"><input type="text" className="form-control" name="bikeCtry"/></div>
          </div>
          <div className="hr-line-dashed" />
          <div className="form-group"><label className="col-lg-2 control-label">장르</label>
            <div className="col-lg-10"><input type="text" className="form-control" name="bikeKind"/></div>
          </div>
          
          <div className="hr-line-dashed" />
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-2">
              <button className="btn btn-white" type="submit">Cancel</button>
              <button className="btn btn-primary" type="submit">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  
  //   <div>
  //  <p>bike_seq : <input type="text" name="bike_seq" /></p>
  //  <p>bike_cc : <input type="text" name="bike_cc" /></p>
  //  <p>bike_orig_price : <input type="text" name="bike_orig_price" /></p>
  //  <p>bike_brand : <input type="text" name="bike_brand" /></p>
  //  <p>bike_ctry : <input type="text" name="bike_ctry"/></p>
  //  <p>bike_kind : <input type="text" name="bike_kind"/></p>
  //  <button onClick={this.handleClick}>등록</button>
  //   </div>  
  );
}
}
export default adminproductinsert;