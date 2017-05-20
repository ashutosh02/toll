'use strict';
/*
 * Utility - utility.js
 * Author: Ashutosh Mishra
 * Date: 19-May-2017
 */
var constant = require('./constants');


var utility = {};

/**
 * Function is use to check Toll required or not
 * @access private
 * @return boolean
 * Created by Ashutosh Mishra
 * Created Date 19-May-2017
 */

utility.tollrequired = function (vechileno, vehicle_duty) {
    var state = vechileno.substring(0, 2).toLowerCase();
    if ((constant.config.currentstate.toLowerCase() === state) || (vehicle_duty.toLowerCase() === 'govt')) {
        return false;
    } else {
        return true;
    }


}

/**
 * Function is use to check no of wheels should be 2
 * @access private
 * @return boolean
 * Created by Ashutosh Mishra
 * Created Date 20-May-2017
 */


utility.checkno_wheels = function(no_wheels){
    if (no_wheels >= 2) {
        return true;
    }
    else{
        return false;
    }

}

/**
 * Function is use to multi Axle Calculation
 * @access private
 * @return number
 * Created by Ashutosh Mishra
 * Created Date 20-May-2017
 */

utility.axelCalculation= function(no_axel){
    var axelPrice=500;
    var addtionAxelPair=no_axel/2;
    if(addtionAxelPair>1){
        axelPrice +=(addtionAxelPair-1)*100;
    }
    return axelPrice;
}

module.exports = utility;
