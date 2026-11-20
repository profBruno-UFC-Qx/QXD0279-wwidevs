import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {User} from "../types/user.ts";
import {api} from "../services/api.ts";


export const useAuthStore = defineStore('auth', ()=> {
    const storedUser = localStorage.getItem('user');
    const user = ref<User | null>(storedUser ? JSON.parse(storedUser) : null);
    const token = ref<string | null>(localStorage.getItem('token'));

    const isAuthenticated = computed(() => !!user.value && !!token.value);
    const role = computed(() => user.value?.role ?? null)

    async function login(credentials: { email: string, password: string }) {
        const { data } = await api.post('/auth/login', credentials);

        user.value = data.user;
        token.value = data.token;

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
    }

    async function register(payload: { name: string, email: string, password: string }) {
        await api.post('/auth/register', payload);
    }

    function logout() {
        user.value = null;
        token.value = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return {
        user,
        token,
        isAuthenticated,
        role,
        login,
        register,
        logout
    }

})