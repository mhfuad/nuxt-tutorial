import { defineStore } from 'pinia';
import { useRuntimeConfig } from "#imports";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as any,
        accessToken: localStorage.getItem("accessToken") || null,
        refreshToken: localStorage.getItem("refreshToken") || null,
        tokenExpire: localStorage.getItem("tokenExpire") || null,
    }),
    actions: {
        async login(userData){
            try{
                const config = useRuntimeConfig();
                const response = await $fetch(`${config.public.apiBase}/auth/login`, {
                    method: "POST",
                    body: userData,
                });
                this.accessToken = response.accessToken;
                this.refreshToken = response.refreshToken;
                this.user = response.user
                this.tokenExpire = response.tokenExpire

                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);
                localStorage.setItem("user", JSON.stringify(response.user));
                localStorage.setItem("tokenExpire", response.tokenExpire);
            }catch (error){
                console.log('Login faild: ', error)
                throw error;
            }
        },
        async register(userData){
            try{
                const config = useRuntimeConfig();
                const response = await $fetch(`${config.public.apiBase}/auth/register`, {
                    method: "POST",
                    body: userData,
                });
                this.accessToken = response.accessToken;
                this.refreshToken = response.refreshToken;
                this.user = response.user

                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);
                localStorage.setItem("user", JSON.stringify(response.user));
            } catch (error){
                console.log("Registration failed:", error);
                throw error;
            }
        },

        async logout(username){
            try{
                const config = useRuntimeConfig();
                const response = await $fetch(`${config.public.apiBase}/auth/logout/${username}`, {
                    headers: {
                        Authorization: `Bearer ${this.accessToken}`, // Add Authorization header
                    },
                });
                
            } catch (error){

            }

            this.accessToken = null;
            this.refreshToken = null;
            this.user = null;

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
        }
    }
})