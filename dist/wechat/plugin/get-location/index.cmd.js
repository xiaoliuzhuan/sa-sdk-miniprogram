"use strict";function isObject(t){return null!=t&&"[object Object]"==Object.prototype.toString.call(t)}function isString(t){return"[object String]"==toString.call(t)}function log(){if("object"==typeof console&&console.log){isString(arguments[0])&&(arguments[0]="sensors getLocation————"+arguments[0]);try{return console.log.apply(console,arguments)}catch(t){console.log("sensors getLocation————",arguments[0])}}}var _={isObject:isObject,log:log},sa=null,GetLocation={name:"sa-getLocation",lib_version:"1.0.0",init:function(t,o){if(!t||!_.isObject(t))return _.log("请传入正确的 sensors 对象！"),!1;sa=t,o&&this.getLocation(o)},getLocation(t){"wgs84"!==t.type&&"gcj02"!==t.type||wx.getSetting({success:function(o){o&&o.authSetting["scope.userLocation"]&&wx.getLocation({type:t.type,success:function(o){o&&sa.registerApp({$latitude:o.latitude*Math.pow(10,6),$longitude:o.longitude*Math.pow(10,6),$geo_coordinate_system:sa._.setUpperCase(t.type)})},fail:function(t){sa._.logger.info("获取位置失败",t)}})}})}};module.exports=GetLocation;