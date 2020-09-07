import Main from '@/views/Main.vue'
import CategoryAdd from '@/views/main/CategoryAdd.vue'
import CategoryList from '@/views/main/CategoryList.vue'


const routes = [
    // 重定向
    {
        path: '/',
        redirect: { name: 'Main' }
    },
    // 主界面
    {
        path: '/Main',
        name: 'Main',
        component: Main,
        children: [
            // 分类编辑
            { path: 'CategoryAdd', name: 'CategoryAdd', component: CategoryAdd },
            // 分类列表
            { path: 'CategoryList', name: 'CategoryList', component: CategoryList }
        ]
    }

];

export default routes;