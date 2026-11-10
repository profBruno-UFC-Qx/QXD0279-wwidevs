import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {User} from "../types/user.ts";
import {api} from "../services/api.ts";

interface LoginCredentials{
    email: string
    password: string
}

interface LoginResponse{
    user: User
    token: string
}

export const useAuthStore = defineStore('auth', ()=> {
    const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))
    const token = ref<string | null>(localStorage.getItem('token'))

    const isAuthenticated = computed(() => !!token.value)
    const role = computed(() => user.value?.role ?? null)

    async function login(credentials: LoginCredentials) {
        const response = await api.post<LoginResponse>(
            '/auth/login',
            credentials
        )

        user.value = response.data.user
        token.value = response.data.token

        localStorage.setItem('token', token.value)
        localStorage.setItem('user', JSON.stringify(user.value))

        return user.value
    }

    function logout() {
        user.value = null
        token.value = null

        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    return {
        user,
        token,
        login,
        role,
        isAuthenticated,
        logout
    }
})