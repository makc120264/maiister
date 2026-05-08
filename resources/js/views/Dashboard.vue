<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div class="text-center">
                    <h1 class="text-3xl font-bold">Welcome to Project Manager</h1>
                    <p class="mt-4 text-gray-600">You are logged in as {{ authStore.user?.name }} ({{ authStore.user?.role }})</p>
                    <button @click="handleLogout" class="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
    await authStore.logout();
    router.push('/login');
};
</script>
