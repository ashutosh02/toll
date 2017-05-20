'use strict';

var constant = require('../lib/constants.js'),
    utility = require('../lib/utility.js'),
    Response = require('../lib/response.js');

module.exports = {
    tollCalculation: tollCalculation,
};


/**
 * Function is use to Get toll calculation
 * @access private
 * @return json
 * Created by Ashutosh Mishra
 * Created Date 19-May-2017
 */
function tollCalculation(req, res) {
    var vehicle_number = req.body.vehicle_number;
    var vehicle_type = req.body.vehicle_type;
    var vehicle_duty = req.body.vehicle_duty;
    var no_wheels = req.body.no_wheels;

    if (!vehicle_number || !vehicle_type || !vehicle_duty || !no_wheels) {
        return res.json(Response(constant.statusCode.error, constant.messages.requiredFieldsMissing));
    }
    else {
        if (utility.checkno_wheels(no_wheels)) {
            var data = {};
            var otherPrice = 0;
            if (utility.tollrequired(vehicle_number, vehicle_duty)) {

                if (no_wheels >= 4) {
                    var no_axle = req.body.no_axle;
                    if (no_axle >= 2) {
                        otherPrice = utility.axelCalculation(no_axle);
                    }
                }

                if (no_wheels == 2) {
                    data.toll = 20;
                    res.json(Response(constant.statusCode.ok, constant.messages.tollCalculated, data, null));
                }
                else if (no_wheels == 3) {
                    data.toll = 50;
                    res.json(Response(constant.statusCode.ok, constant.messages.tollCalculated, data, null));
                }
                else if ((no_wheels == 4) && (vehicle_type == 'LTV')) {
                    data.toll = 100 + otherPrice;
                    res.json(Response(constant.statusCode.ok, constant.messages.tollCalculated, data, null));
                }
                else if ((no_wheels == 4) && (vehicle_type == 'Transport')) {
                    data.toll = 200 + otherPrice;
                    res.json(Response(constant.statusCode.ok, constant.messages.tollCalculated, data, null));
                }
                else if (no_wheels == 6) {
                    data.toll = 600 + otherPrice;
                    res.json(Response(constant.statusCode.ok, constant.messages.tollCalculated, data, null));
                }
            }
            else {
                res.json(Response(constant.statusCode.ok, constant.messages.noTollRequired, data, null));
            }
        }
        else {
            return res.json(Response(constant.statusCode.error, constant.messages.noWheelsError));
        }

    }

}