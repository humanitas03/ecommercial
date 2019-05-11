/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It is based on open source and does <strong>not have responsibility</strong>
 * for secondary processing.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript string utils
 * @license Open-source license 1.0
 */
var stringUtils = {
    //공백 제거
    trim : function (str) {
        return str.replace(/^\s+|\s+$/g,'');
    },
    //empty 체크
    isEmpty: function (strValue) {
        return strValue == undefined || strValue == null || strValue == '' || strValue == 'empty' ? true : false;
    },
    //notEmpty 체크
    isNotEmpty: function (strValue) {
        return stringUtils.isEmpty(strValue) == false ? true : false;
    },
    //empty일때 기본값 표시
    defaultIfEmpty: function (strValue, defaultValue) {
        defaultValue = stringUtils.isEmpty(defaultValue) ? '' : defaultValue;
        return stringUtils.isEmpty(strValue) ? defaultValue : strValue;
    },
    //문자열에서 구분자 왼쪽만 가져오기
    left : function (sourceStr, findStr) {
        var index = sourceStr.indexOf(findStr);
        if(index < 0) {	return ""; }
        else { return (sourceStr.substring(0, index)); }
    },
    //문자열에서 구분자 오른쪽만 가져오기
    right : function (sourceStr, findStr) {
        var index = sourceStr.indexOf(findStr);
        if(index < 0) { return ""; }
        else { var len = sourceStr.length; return (sourceStr.substring(index+findStr.length, len)); }
    },
    rightBack : function (sourceStr, findStr){
        var index = sourceStr.lastIndexOf(findStr);
        if (index < 0) { return ""; }
        else { return (sourceStr.substring(index+findStr.length, sourceStr.length)); }
    },
    //문자열에서 왼쪽에서부터 인덱스(1부터 ~ ) 만큼 가져오기
    leftIndex : function (sourceStr, idx) {
        if (idx <= 0) { return ""; }
        else if (idx > String(sourceStr).length) { return sourceStr; }
        else { return String(sourceStr).substring(0, idx); }
    },
    //문자열에서 오른쪽에서부터 인덱스(1부터 ~ ) 만큼 가져오기
    rightIndex : function (sourceStr, idx) {
        if (idx <= 0) { return ""; }
        else if (idx > String(sourceStr).length) { return sourceStr; }
        else { var len = String(sourceStr).length; return String(sourceStr).substring(len, len - idx); }
    },
    //숫자 3째자리에 콤마붙이기
    fnCommaFormat : function (m){
        var a,b;
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = '.' + nums[1];
        } else {
            a = m; b = "";
        }
        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + b;
    },
    defaultString : function(str, def) {
        if(this.isEmpty(def)) {
            def = '';
        }
        return this.isEmpty(str) ? def : str;
    },
    //세자리수 마다 콤마처리 + 원
    fnWonFormat : function (m){
        return this.defaultString(this.fnCommaFormat(m), "0")+" 원";
    },
    //숫자앞 digits만큼 0붙이기
    leadingZeros : function (n, digits) {
        var zero = '';
        n = n.toString();
        if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++) {
                zero += '0';
            }
        }
        return zero + n;
    },
    isTelnumber : function (s) {
        var regExp = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/;	// -대쉬 필수
        //var regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;	// - 대쉬 옵션

        if (!regExp.test(s)) {
            return false;
        } else {
            return true;
        }

    },
    //숫자 3째자리에 콤마붙이기, 소수점 기본 할당 또는 소수점 표현자리수 지정
    fnCommaDecimalFormat : function (m, s){
        if(m === undefined || m == null) {return "-";}
        if(s === undefined){
            s = 0;
        }
        m = Number(m).toFixed(s);
        var a,b;
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = '.' + nums[1];
        } else {
            a = m; b = "";
        }

        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + b;
    },
    //콤마, 단위환산, 소수점 처리, 원 처리
    fnUnitChangeAndCommaFormat : function (m, s){
        if(m === undefined || m == null) 
        {
            var returnValue = new Array();
            returnValue.push("-");
            returnValue.push("원");
            return returnValue;
        }
        var a,b;
        var unit = '원';
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = nums[1];
        } else {
            a = m; b = "";
        }
        if(unit == "원"){
            if(a.toString().length >= 7){
                a = Number(a) / Number(1000) / Number(1000);
                unit = "만원";
            }
            else if(a.toString().length >= 4){
                a = Number(a) / 1000;
                unit = "만원";
            }
        }

        var tempa; var tempb;
        if (a.toString().indexOf('.') != -1) {
            var tempnums = a.toString().split('.');
            tempa = tempnums[0]; tempb = tempnums[1];
        } else {
            tempa = a; tempb = "";
        }

        var value = tempa.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +"." +tempb+ b;
        if(s === undefined){
            s = 2;
        }
        //var returnValue = Number(value).toFixed(s);
        var tempValue = value.toString().split(".");    //.substr(0, s);
        if(tempValue[1].length < s){
            var createLength = s - tempValue[1].length
            var createzero = "";
            for(var i=0;i<createLength;i++){
                createzero += "0";
            }
            tempValue[1] = tempValue[1] + createzero;
        }
        var numberValue = tempValue[0] +  "." + tempValue[1].substr(0,s);
        
        var returnValue = new Array();
        returnValue.push(numberValue);
        returnValue.push(unit);
        return  returnValue;
    },
    // 숫자만 입력
    isNumber : function(s){
        var regExp = /^[0-9]+$/;
        if (!regExp.test(s)) {
            return false;
        } else {
            return true;
        }
    },
    // 제이슨 타입으로 타입 치환
    formDataToJsonStr: function($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        Array.map(unindexed_array, function(n, i){
            console.log("# formDataToJsonStr :["+i+"] - "+n['name']+":"+n['value'])
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    },
    replaceAll : function (str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
    }
}

export default stringUtils