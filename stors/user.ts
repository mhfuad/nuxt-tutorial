import { defineStore } from 'pinia';
import { useRuntimeConfig } from "#imports";
import { useAuthStore } from './auth';

export const useUserStore = defineStore("users", {
    state: () => ({
        _users: []
    }),
    getters: {
        users: (state) => state._users,
    },
    actions: {
        async getUsers(page = 1, size = 20) {
            const authStore = useAuthStore();
            const accessToken = authStore.accessToken;
            try {
                const config = useRuntimeConfig();
                const response = await fetch(`${config.public.apiBase}/user?page=${page - 1}&size=${size}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Add Authorization header
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                this._users = data; 
            } catch (error) {
                console.error("Failed to fetch users:", error.message);
            }
        },

        async deleteUser(userId: number) {
            try {
                const response: any = await fetch(`https://64a3ffc3c3b509573b56e5f8.mockapi.io/api/v1/users/${userId}`, {
                    method: 'DELETE',
                });
                
                if(response.ok){
                    console.log("here")
                    this._users = this._users.filter((user) => user.id !== userId);
                }
            } catch (error) {
                console.error("Failed to delete user:", error);
                throw error;
            }
        },
    }
})