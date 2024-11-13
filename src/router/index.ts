import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    // 登录
    {
        path:"/login",
        component: ()=>import("@/views/login/index.vue")
    },
    {
        path:"/login/serviceAgree",
        component: () => import("@/views/login/serviceAgree.vue")
    },
    {
        path:"/login/privacyPolicy",
        component: () => import("@/views/login/privacyPolicy.vue")
    },
    //任务主页
    {
        path:"/task",
        component: ()=>import("@/views/task/index.vue")
    },
    {
        path:"/task/search",
        component: () => import("@/views/task/search.vue")
    },
    {
        path:"/task/details/:id",
        component: () => import("@/views/task/details.vue")
    },
    {
        path:"/task/companySource/:id",
        component: ()=>import("@/views/task/companySource.vue")
    },
    // 合约主页
    {
        path:"/contract",
        component: () => import("@/views/contract/index.vue")
    },
    {
        path:"/contract/details/:id",
        component: () => import("@/views/contract/details.vue")
    },
    {
        path:"/contract/progress/:id",
        component: ()=>import("@/views/contract/progress.vue")
    },
    // 消息主页
    {
        path:"/message",
        component: () => import("@/views/message/index.vue")
    },
    {
        path:"/message/systemList",
        component: () => import("@/views/message/systemList.vue")
    },
    {
        path:"/message/systemDetails/:id",
        component: ()=>import("@/views/message/systemDetails.vue")
    },
    {
        path:"/message/talk/:id",
        component: () => import("@/views/message/talk.vue")
    },
    // 我的主页
    {
        path:"/my",
        component: () => import("@/views/my/index.vue")
    },
    {
        // 用户中心
        path:"/my/user",
        component: ()=>import("@/views/my/user/index.vue")
    },
    {
        path:"/my/user/authReal",
        component: () => import("@/views/my/user/authReal.vue")
    },
    {
        path:"/my/user/certified",
        component: ()=>import("@/views/my/user/certified.vue")
    },
    {
        path:"/my/user/identitySwitch",
        component: () => import("@/views/my/user/identitySwitch.vue")
    },
    {
        // 我的设置
        path:"/my/set",
        component: ()=>import("@/views/my/set/index.vue")
    },
        // 意见反馈
    {
        path:"/my/feedback",
        component: () => import("@/views/my/feedback/index.vue")
    },
       // 我的账户 account
    {
        path:"/my/account",
        component: ()=>import("@/views/my/account/index.vue")
    },
    {
        path:"/my/account/advance",
        component: () => import("@/views/my/account/advance.vue")
    },
    {
        path:"/my/account/coinExplain",
        component: ()=>import("@/views/my/account/coinExplain.vue")
    },
    {
        path:"/my/account/depositExplain",
        component: () => import("@/views/my/account/depositExplain.vue")
    },
       // 我的简历
    {
        path:"/my/resume",
        component: ()=>import("@/views/my/resume/index.vue")
    },
    {
        path:"/my/resume/preview",
        component: () => import("@/views/my/resume/preview.vue")
    },
    // 我的收藏
    {
        path:"/my/collect",
        component: ()=>import("@/views/my/collect/index.vue")
    },
    {
        path:"/my/collect/serviceAgree",
        component: () => import("@/views/my/collect/serviceAgree.vue")
    },
      // 人才主页
    {
        path:"/talent",
        component: ()=>import("@/views/talent/index.vue")
    },
    {
        path:"/talent/details",
        component: ()=>import("@/views/talent/details.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫


export default router;