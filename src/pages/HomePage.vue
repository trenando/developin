<template>
    <section>
        <div>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field type="text" v-model="employeesStore.searchQuery" placeholder="Поиск..."/>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select v-model="employeesStore.selectedSort" :items="employeesStore.options"
                            label="Выберите из списка..." />
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex justify-center">
                        <v-btn color="primary" @click="editHandle">
                            Добавить Работника
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <employee-create-modal />
            <employee-edit-modal />
        </div>
        <table-component />
    </section>
</template>
    
<script setup lang="ts">
import TableComponent from "../components/TableComponent.vue";
import { useEmployeesStore } from "@/store/employees";
import EmployeeCreateModal from "../components/EmployeeCreateModal.vue";
import EmployeeEditModal from "../components/EmployeeEditModal.vue";

const employeesStore = useEmployeesStore();

const editHandle = (e: Event) => {
    e.stopPropagation();
    employeesStore.isCreateModalOpen = true
}

</script>