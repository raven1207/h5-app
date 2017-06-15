import {URL_LOGIN_PASSWD}from '../config/api'
import config from '../app-config/config.json'
import Vue from 'vue'

// export class ShoppingCart {
	  /**
   *
   * fetch cart product list from servier
   * @static
   * @param {Number|String} memberId 用户ID
   * @returns {Promise}
   */
   // static fetch(memberId){
   // 	var params={
   // 		memid:memberId
   // 	}
   // 	return Vue.http.post(URL_LOGIN_PASSWD, params);
   // }
// }
export function mineData(memberId){
 var params={
      oldPass:'ss',
      newPass:'ss',
      newPassCfm:'ss'
   }
   return Vue.http.post(`${config.host}/mine/loginPasswd.htm?oldPass=11&newPass=11&newPassCfm=11`)
}
export function getVerifyCodeData(params){
return Vue.http.post(`${config.host}/sso/register.htm?action=sendCode&mobile=`+params.mobile+`&imageCode=`)
}

 /**
   *
   * fetch cart product list from servier
   * @static
   * @param {Number|String} 注册页
   * @returns {Promise}
   */
   export function registerData(params){
    return Vue.http.post(`${config.host}/sso/register.htm?action=verifyCode&verifyCode=`+params.verifyCode)
   }
  /**
   *
   * fetch cart product list from servier
   * @static
   * @param {Number|String}
   * @returns {Promise}
    */ 
export function registerPhoneData(){
    return Vue.http.post(`${config.host}/sso/register.htm?action=sendCode&mobile=13500000000&imageCode=`)
}