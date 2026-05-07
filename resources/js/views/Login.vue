<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
            <h2 class="text-2xl font-bold text-center">Login</h2>
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label class="block mb-1">Email</label>
                    <input v-model="form.email" type="email" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div>
                    <label class="block mb-1">Password</label>
                    <input v-model="form.password" type="password" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
                <button type="submit" :disabled="loading" class="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50">
                    {{ loading ? 'Logging in...' : 'Login' }}
                </button>
            </form>
            <p class="text-center text-sm">
                Don't have an account? <router-link to="/register" class="text-blue-600">Register</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
    email: '',
    password: ''
});
const error = ref('');
const loading = ref(false);

const handleLogin = async () => {
    loading.ref = true;
    error.value = '';
    try {
        await authStore.login(form.value.email, form.value.password);
        router.push('/');
    } catch (e) {
        error.value = e.response?.data?.message || 'Login failed';
    } finally {
        loading.value = false;
    }
};
</script>
