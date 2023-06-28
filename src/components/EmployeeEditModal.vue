<template>
    <v-row justify="center">
        <v-dialog v-model="employeesStore.isEditModalOpen" persistent width="600">
            <v-form @submit.prevent ref="form">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Работник</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols=6>
                                    <v-text-field :rules="InputRule" label="Имя*" v-model="employee.name"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols=6>
                                    <v-text-field :rules="InputRule" label="Фамилия*" v-model="employee.surname"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols=6>
                                    <v-text-field :rules="InputRule" label="Отчество*" v-model="employee.patronymic"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols=6>
                                    <v-text-field :rules="InputRule" label="Должность*" v-model="employee.post"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols=6>
                                    <v-checkbox label="Трудовая книжка сдана"
                                        v-model="employee.employmentHistory"></v-checkbox>
                                </v-col>
                                <v-col cols=6>
                                    <v-text-field type="number" v-model.number="employee.money" />
                                </v-col>
                                <v-col cols=6>
                                    <v-text-field type="date" v-model="employee.startWork" />
                                </v-col>
                                <v-col cols=6>
                                    <v-radio-group>
                                        <v-radio label="Полная" value="full" v-model="employee.payment"></v-radio>
                                        <v-radio label="Половина" value="half" v-model="employee.payment"></v-radio>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*обязательное поле</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="employeesStore.isEditModalOpen = false">
                            Закрыть
                        </v-btn>
                        <v-btn color="blue-darken-1" type="submit" variant="text" @click="submit">
                            Сохранить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
    </v-row>
</template>
    
<script setup lang="ts">
import { ref, Ref } from "vue";
import { useEmployeesStore } from "../store/employees";
import { storeToRefs } from "pinia";

const employeesStore = useEmployeesStore()
const { employee } = storeToRefs(employeesStore);

const form: Ref<any> = ref(null)
const submit = async () => {
    const { valid } = await form.value.validate()
    if (valid) {
        employeesStore.updateEmployee();
        employeesStore.isEditModalOpen = false
    }
}
const InputRule = [
    (value: string) => {
        if (value) return true
        return "обязательное поле"
    }
]
</script>