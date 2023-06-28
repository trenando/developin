<template>
    <v-container class="d-flex justify-center align-center" style="height: 100%;">
        <v-card>
            <v-card-title>{{ `${employee.surname} ${employee.name} ${employee.patronymic}` }}</v-card-title>
            <v-card-subtitle>{{ employee.post }}</v-card-subtitle>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            Трудовая книжка сдана: {{ employee.employmentHistory }}
                        </v-col>
                        <v-col cols="12" sm="6">
                            Зарплата: {{ employee.money }}
                        </v-col>
                        <v-col cols="12" sm="6">
                            Начало работы: {{ employee.startWork }}
                        </v-col>
                        <v-col cols="12" sm="6">
                            Оклад: {{ employee.payment === "half" ? "Половина" : "Полный" }}
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-container class="d-flex justify-center">
                    <v-btn color="primary" @click="router.push('/')">Вернуться</v-btn>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
    
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmployeesStore } from "@/store/employees";
import { storeToRefs } from 'pinia';
import { onUnmounted } from 'vue';

const route = useRoute();
const router = useRouter();
const employeesStore = useEmployeesStore();
const { employee } = storeToRefs(employeesStore);

onBeforeMount(() => {
    employeesStore.getEmployeeById(Number(route.params.id));
})

onUnmounted(() => {
    employeesStore.clearEmployee()
})

</script>