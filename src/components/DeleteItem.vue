<template>
    <v-btn @click="showModal">Удалить</v-btn>
    <v-dialog v-model="employeesStore.isDeleteOpen" persistent max-width="500px">
        <v-card>
            <v-card-title class="headline">Подтвердить удаление</v-card-title>
            <v-card-text>Вы уверены, что хотите удалить этот элемент?</v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="employeesStore.deleteItem(props.id)">Да</v-btn>
                <v-btn color="secondary" @click="employeesStore.isDeleteOpen = false">Отмена</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
    
<script setup lang="ts">
import { useEmployeesStore } from "../store/employees"

const props = defineProps(["id"])
const employeesStore = useEmployeesStore()


const showModal = (e: Event) => {
    e.stopPropagation()
    employeesStore.isDeleteOpen = true
}

</script>