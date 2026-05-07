<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
            <h2 class="text-2xl font-bold text-center">Register</h2>
            <form @submit.prevent="handleRegister" class="space-y-4">
                <div>
                    <label class="block mb-1">Name</label>
                    <input v-model="form.name" type="text" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div>
                    <label class="block mb-1">Email</label>
                    <input v-model="form.email" type="email" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div>
                    <label class="block mb-1">Password</label>
                    <input v-model="form.password" type="password" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div>
                    <label class="block mb-1">Confirm Password</label>
                    <input v-model="form.password_confirmation" type="password" class="w-full px-3 py-2 border rounded" required>
                </div>
                <div class="mt-4">
                    <label class="block mb-1 font-medium text-gray-700">Role</label>
                    <select v-model="form.role" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" required>
                        <option value="member">Member</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div v-if="Object.keys(errors).length > 0" class="text-red-500 text-sm">
                    <ul>
                        <li v-for="(errs, field) in errors" :key="field">
                            {{ errs[0] }}
                        </li>
                    </ul>
                </div>
                <button type="submit" :disabled="loading" class="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700 disabled:opacity-50">
                    {{ loading ? 'Registering...' : 'Register' }}
                </button>
            </form>
            <p class="text-center text-sm">
                Already have an account? <router-link to="/login" class="text-blue-600">Login</router-link>
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
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'member'
});
const errors = ref({});
const loading = ref(false);

const handleRegister = async () => {
    loading.value = true;
    errors.value = {};
    try {
        await authStore.register(form.value);
        router.push('/');
    } catch (e) {
        if (e.response?.data?.errors) {
            errors.value = e.response.data.errors;
        } else {
            errors.value = { message: [e.response?.data?.message || 'Registration failed'] };
        }
    } finally {
        loading.value = false;
    }
};
</script>
