<template>
    <div class="min-h-screen bg-gray-100">
        <nav v-if="authStore.isLoggedIn" class="bg-white shadow-sm mb-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <span class="text-xl font-bold">Project Manager</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-4 text-gray-700">{{ authStore.user?.name }}</span>
                        <button @click="logout" class="text-gray-600 hover:text-gray-900">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
    await authStore.logout();
    router.push('/login');
};
</script>
