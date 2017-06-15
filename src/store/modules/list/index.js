import * as types from './types'
import {mineData,getVerifyCodeData,registerData} from '../../../services/accountRequest'
// import { fetchItemPrice, fetchItemList } from './api'
let list = {
    state: {
       loading:false,
       tips:''
    },
   mutations: {
        [types.SET_MESSAGE](state, tips) {
         state.tips=tips;
         }
    },
    actions: {
        fetchUserData:({commit, dispatch}, options) => {
          mineData(options).then(resp => {
             // store.dispatch(MUTATION_SYNC_CART, resp.data.datalist);
             });

        },
        fetchVerifyCode:({commit, dispatch}, options) => {
          getVerifyCodeData(options).then((resp) => {
              let data=resp.body;
                if(data.success){
                   alert(data.resultMsg)
                   windows.location.href=data.redirectUrl;
              }else{
               alert(data.errorMsg || '获取验证码失败');
             }
          },() => {

          })
        },
        fetchUserRegister:({commit,dispatch},options) => {
        registerData(options).then((resp) => {
             let data=resp.body;
             if(data.success){
                   alert(data.resultMsg)
                   windows.location.href=data.redirectUrl;
              }else{
               alert(data.errorMsg);
             }

         },() => {

         })
       }
      
    }

  }



export default list
