import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import News from '@/components/News'
import Trade from '@/components/Trade'
import Oil from '@/components/Oil'
import Gold from '@/components/Gold'
import Mine from '@/components/Mine'
import Find from '@/components/Find'
import About from '@/components/About'
import Guiderisk from '@/components/Guiderisk'
import AccountSingleDetailFund from '@/components/AccountSingleDetailFund'
import ApplyForInvestor from '@/components/ApplyForInvestor'
import AccountAllDetailFunds from '@/components/AccountAllDetailFunds'
import AccountBuyCommission from '@/components/AccountBuyCommission'
import AccountChangeWithdrawPassword from '@/components/AccountChangeWithdrawPassword'
import AccountWithdrawRecords from '@/components/AccountWithdrawRecords'
import AccountWithdrawBalance from '@/components/AccountWithdrawBalance'
import AccountWithdrawBankList from '@/components/AccountWithdrawBankList'
import AccountRechargeAlipayTransfer from '@/components/AccountRechargeAlipayTransfer'
import AccountRechargeAlipay from '@/components/AccountRechargeAlipay'
import AccountRechargeAlipay2 from '@/components/AccountRechargeAlipay2'
import AccountRechargeBankTransfer from '@/components/AccountRechargeBankTransfer'
import AccountRechargeBankTransferSuccess from '@/components/AccountRechargeBankTransferSuccess'
import AccountRechargeMerchantBankFast from '@/components/AccountRechargeMerchantBankFast'
import AccountRechargeMethods from '@/components/AccountRechargeMethods'
import AccountRechargeBankList from '@/components/AccountRechargeBankList'
import AccountChangePassword from '@/components/AccountChangePassword'
import AccountPhoneBinding from '@/components/AccountPhoneBinding'
import AccountIDVerification from '@/components/AccountIDVerification'
import AccountAddBankCard from '@/components/AccountAddBankCard'
import AccountNoviceTask from '@/components/AccountNoviceTask'
import AccountModifyBankCard from '@/components/AccountModifyBankCard'
import AccountInformation from '@/components/AccountInformation'
import SimulatePositions from '@/components/SimulatePositions'
import SimulatePositionsSettlement from '@/components/SimulatePositionsSettlement'
import AccountLogin from '@/components/AccountLogin'
import AccountRegistration from '@/components/AccountRegistration'
import AccountRegistrationPhoneVerification from '@/components/AccountRegistrationPhoneVerification'
import ProfitChart from '@/components/ProfitChart'
import InvestmentSecurity from '@/components/InvestmentSecurity'
import PopularActivities from '@/components/PopularActivities'
import UsOilTradingRules from '@/components/UsOilTradingRules'
import RecommendFriendsMyuser from '@/components/RecommendFriendsMyuser'
import RecommendFriendsPromotion from '@/components/RecommendFriendsPromotion'
import InformationDetails from '@/components/InformationDetails'
import Error404 from '@/components/Error404'
import LearnManipulator from '@/components/LearnManipulator'
import LearnTrade from '@/components/LearnTrade'
import ProfitOnly from '@/components/ProfitOnly'
import MyDeal from '@/components/MyDeal'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '*', component: Error404
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/trade',
      name: 'Trade',
      component: Trade
    },
    {
      path: '/oil',
      name: 'Oil',
      component: Oil
    },
    {
      path: '/gold',
      name: 'Gold',
      component: Gold
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/guiderisk',
      name: 'Guiderisk',
      component: Guiderisk
    },
    {
      path: '/apply-for-investor',
      name: 'ApplyForInvestor',
      component: ApplyForInvestor
    },
    {
      path: '/account-single-detail-fund',
      name: 'accountsingledetailfund',
      component: AccountSingleDetailFund
    },
    {
      path: '/account-all-detail-funds',
      name: 'accountalldetailfunds',
      component: AccountAllDetailFunds
    },
    {
      path: '/account-buy-commission',
      name: 'accountbuycommission',
      component: AccountBuyCommission
    },
    {
      path: '/account-change-withdraw-password',
      name: 'accountchangewithdrawpassword',
      component: AccountChangeWithdrawPassword
    },
    {
      path: '/account-change-password',
      name: 'account-change-password',
      component: AccountChangePassword
    },
    {
      path: '/account-phone-binding',
      name: 'accont-phone-binding',
      component: AccountPhoneBinding
    },
    {
      path: '/account-verify-id',
      name: 'accountidverification',
      component: AccountIDVerification
    },
    {
      path: '/account-withdraw-records',
      name: 'accountwithdrawrecords',
      component: AccountWithdrawRecords
    },
    {
      path: '/account-add-bank-card',
      name: 'accountaddbankcard',
      component: AccountAddBankCard
    },
    {
      path: '/account-modify-bank-card',
      name: 'accountmodifybankcard',
      component: AccountModifyBankCard
    },
    {
      path: '/account-withdraw-balance',
      name: 'accountwithdrawbalance',
      component: AccountWithdrawBalance
    },
    {
      path: '/account-information',
      name: 'accountiformation',
      component: AccountInformation
    },
    {
      path: '/simulate-positions',
      name: 'simulatepositions',
      component: SimulatePositions
    },
    {
      path: '/simulate-positions-settlement',
      name: 'simulatepositionssettlement',
      component: SimulatePositionsSettlement
    },
    {
      path: '/account-login',
      name: 'accountlogin',
      component: AccountLogin
    },
    {
      path: '/account-registration',
      name: 'accountregistration',
      component: AccountRegistration
    },
    {
      path: '/account-registration-phone-verification',
      name: 'accountregistrationphoneverification',
      component: AccountRegistrationPhoneVerification
    },
    {
      path: '/profit-chart',
      name: 'profitchart',
      component: ProfitChart
    },
    {
      path: '/account-recharge-alipay-transfer',
      name: 'accountrechargealipaytransfer',
      component: AccountRechargeAlipayTransfer
    },
    {
      path: '/account-recharge-alipay',
      name: 'accountrechargealipay',
      component: AccountRechargeAlipay
    },
    {
      path: '/account-recharge-alipay2',
      name: 'accountrechargealipay2',
      component: AccountRechargeAlipay2
    },
    {
      path: '/account-recharge-bank',
      name: 'accountrechargebanktransfer',
      component: AccountRechargeBankTransfer
    },
    {
      path: '/account-recharge-bank-success',
      name: 'accountrechargebanktransfersuccess',
      component: AccountRechargeBankTransferSuccess
    },
    {
      path: '/account-recharge-merchant-bank-fast',
      name: 'accountrechargemerchantbankfast',
      component: AccountRechargeMerchantBankFast
    },
    {
      path: '/account-recharge-methods',
      name: 'accountrechargemethods',
      component: AccountRechargeMethods
    },
    {
      path: '/account-recharge-bank-list',
      name: 'accountrechargebanklist',
      component: AccountRechargeBankList
    },
    {
      path: '/account-novice-task',
      name: 'accountnovicetask',
      component: AccountNoviceTask
    },
    {
      path: '/account-withdraw-bank-list',
      name: 'accountwithdrawbanklist',
      component: AccountWithdrawBankList
    },
    {
      path: '/investment-security',
      name: 'investmentsecurity',
      component: InvestmentSecurity
    },
    {
      path: '/popular-activities',
      name: 'popularactivities',
      component: PopularActivities
    },
    {
      path: '/us-oil-trading-rules',
      name: 'usoiltradingrules',
      component: UsOilTradingRules
    },
    {
      path: '/recommend-friends-my-user',
      name: 'recommendfriendsmyuser',
      component: RecommendFriendsMyuser
    },
    {
      path: '/recommend-friends-promotion',
      name: 'recommendfriendspromotion',
      component: RecommendFriendsPromotion
    },
    {
      path: '/information-details',
      name: 'informationdetails',
      component: InformationDetails
    },
    {
      path: '/error-404',
      name: 'error404',
      component: Error404
    },
    {
      path: '/beginners-guide-learn-manipulator',
      name: 'learnmanipulator',
      component: LearnManipulator
    },
    {
      path: '/beginners-guide-learn-trade',
      name: 'learntrade',
      component: LearnTrade
    },
    {
      path: '/stop-profit-only',
      name: 'profitonly',
      component: ProfitOnly
    },
    {
      path: '/my-deal',
      name: 'mydeal',
      component: MyDeal
    }
  ]
})
