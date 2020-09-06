import Main from '@/views/Main.vue'
import CategoryAdd from '@/views/main/CategoryAdd.vue'


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
            {
                path: 'CategoryAdd',
                name: 'CategoryAdd',
                component: CategoryAdd
            }
        ]
    }

];

export default routes;