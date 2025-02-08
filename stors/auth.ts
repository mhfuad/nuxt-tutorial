import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as any,
        token: localStorage.getItem("token") || null,
    }),
    actions: {
        async login(username: string, password: string){
            try{
                const response = await $fetch('/');
                localStorage.setItem("token", response.token);
            }catch (error){
                console.log('Login faild: ', error)
                throw error;
            }
        },
        logout(){
            this.user = null;
            this.token = null;
        }
    }
})