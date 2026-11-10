import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../modules/auth/views/LoginView.vue";
import HomeView from "../modules/public/views/HomeView.vue";
import RegisterView from "../modules/auth/views/RegisterView.vue";
import CartView from "../modules/customer/views/CartView.vue";
import EmployeeView from "../modules/employee/views/EmployeeView.vue";
import OrderDetailView from "../modules/customer/views/OrderDetailView.vue";
import ProductsView from "../modules/admin/views/ProductsView.vue";
import OrdersView from "../modules/customer/views/OrdersView.vue";
import CategoriesView from "../modules/admin/views/CategoriesView.vue";
import {useAuthStore} from "../stores/auth.ts";

const routes = [
    // Públicas
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
      path:'/login',
      name: 'login',
      component: LoginView,
    },
    {
        path: '/register',
        name: 'registro',
        component: RegisterView,
    },
    // Cliente
    {
        path: '/cliente/carrinho',
        name: 'carrinho',
        component: CartView,
        meta:{
            requeiresAuth: true,
            roles: ['CUSTOMER']
        }
    },
    {
        path: '/cliente/pedidos',
        name: 'pedidos',
        component: OrdersView,
        meta: {
            requiresAuth: true,
            roles: ['CUSTOMER']
        }
    },
    {
        path:  '/cliente/pedidos/:id',
        name: 'pedido',
        compontente: OrderDetailView,
        meta:{
            requiresAuth: true,
            roles: ['CUSTOMER']
        }
    },
    // Funcionario
    {
        path: '/funcionario/pedidos',
        name: 'ordem-pedidos',
        component: EmployeeView,
        meta:{
            requireAuth: true,
            roles: ['EMPLOYEE']
        }
    },
    // Administrativo
    {
        path: '/admin/produtos',
        name: 'admin-produtos',
        component: ProductsView,
        meta:{
            requiresAuth: true,
            roles: ['ADMIN']
        }
    },
    {
        path: '/admin/categorias',
        name: 'admin-categorias',
        compontent: CategoriesView,
        meta:{
            requiresAuth: true,
            roles: ['ADMIN']
        }
    },
    {
        path: '/admin/orders',
        name: 'historico-pedidos',
        compontent: OrdersView,
        meta: {
            requiresAuth: true,
            roles: ['ADMIN']
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// redirecionamento conforme o perfil
function getHomeByRole(role: string | null){
    switch (role){
        case 'CUSTOMER':
            return { name: 'home'}
        case 'EMPLOYEE':
            return { name: 'ordem-pedidos'}
        case 'ADMIN':
            return { name: 'admin-produtos'}
        default:
            return { name: 'login'}
    }
}

// proteção das rotas
router.beforeEach((to ) => {
    const authStore = useAuthStore()

    // pula o login se já autenticado
    if((to.name == 'login' || to.name === 'register') && authStore.isAuthenticated) {
        return getHomeByRole(authStore.role)
    }
    // permite acesso a views públicas
    if(!to.meta.requiresAuth){
        return true
    }
    // verifica se o usuário esta autenticado
    if (!authStore.isAuthenticated){
        return {
            name: 'login',
            query: { redirect: to.fullPath }
        }
    }
    // verifica autorização por perfil
    const allowedRoles = to.meta.roles as string[] | undefined

    if(allowedRoles && !allowedRoles.includes(authStore.role ?? '')){
        return getHomeByRole(authStore.role)
    }
    return true
})

export default router