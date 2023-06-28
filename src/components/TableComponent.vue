<template>
    <section style="margin-top: 40px;">
        <v-table v-if="employeesStore.employees.length">
            <thead>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Отчество</th>
                <th>Должность</th>
            </thead>
            <tbody>
                <tr v-for="employee in filteredAndSortedEmployees" :key="employee.id" style="cursor: pointer;"
                    @click="router.push(`/about/${employee.id}`)">
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.surname }}</td>
                    <td>{{ employee.patronymic }}</td>
                    <td>{{ employee.post }}</td>
                    <td>
                        <delete-item :id="employee.id" />
                    </td>
                    <td>
                        <v-btn @click="(e: Event) => editHandle(e, employee)">Изменить</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <div v-else class="text-h5">
            Здесь нет никаких работников, попробуйте создать нового
        </div>
    </section>
</template>
    
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "../store/employees"
import { useRouter } from "vue-router";
import { Employee } from "@/store/Types";
import DeleteItem from "./DeleteItem.vue";

const router = useRouter();

const employeesStore = useEmployeesStore();
const { filteredAndSortedEmployees } = storeToRefs(employeesStore);
const editHandle = (e: Event, employee: Employee) => {
    e.stopPropagation()
    employeesStore.isEditModalOpen = true
    employeesStore.employee = { ...employee };
}
</script>