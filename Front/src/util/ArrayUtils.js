/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It may have been processed by working
 * with a subset of <strong>undescore<strong> core modules.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript array utils
 * @license Open-source license 1.0
 */
var arrayUtils = {

    range : function(s, e) {
        var te = [];
        for (let i = s; i <= e; i++) {
            te.push(i);
        }
        return te;
    }

}

export default arrayUtils