import { defineStore } from 'pinia'
import { computed, ref, Ref, watch } from 'vue'
import { employeesArray } from './epmloyees/employeesArray'
import { Employee, Options, SelectedSort } from './Types';
import { initialEmployee } from './epmloyees/initialEmployee';
import { optionsArray } from './epmloyees/optionsArray';

export const useEmployeesStore = defineStore("employeesStore", () => {
  const employees: Ref<Array<Employee>> = ref(employeesArray);

  const options: Ref<Options> = ref(optionsArray);

  const employee: Ref<Employee> = ref(structuredClone(initialEmployee))

  const isEditModalOpen: Ref<boolean> = ref(false);
  const isCreateModalOpen: Ref<boolean> = ref(false);
  const isDeleteOpen: Ref<boolean> = ref(false)
  const selectedSort: Ref<SelectedSort> = ref("");
  const searchQuery: Ref<string> = ref("")

  const employeesInLocalStorage = localStorage.getItem("employees")
  if (employeesInLocalStorage) {
    employees.value = JSON.parse(employeesInLocalStorage)._value
  }

  const sortedEmployees = computed(() => {
    return employees.value.sort((emp1: Employee, emp2: Employee) => {
      if (selectedSort.value) {
        return emp1[selectedSort.value].localeCompare(emp2[selectedSort.value])
      }
      return 0;
    })
  })

  const filteredAndSortedEmployees = computed(() => {
    return sortedEmployees.value.filter(el => el.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  const clearEmployee = () => {
    employee.value = structuredClone(initialEmployee);
  }

  const addNewEmployee = () => {
    employees.value.push(employee.value);
    clearEmployee()
  }

  const getEmployeeById = (id: number) => {
    const employeeById = employees.value.find(el => el.id === id);
    if (employeeById) {
      employee.value = employeeById;
    }
  }

  const deleteItem = (id: number) => {
    const newArr = employees.value.filter(el => el.id !== id)
    employees.value = newArr;
    isDeleteOpen.value = false
  }

  const updateEmployee = () => {
    const employeeToUpdate = employees.value.find(el => el.id === employee.value.id)
    if (employeeToUpdate) {
      Object.assign(employeeToUpdate, employee.value)
    }
    clearEmployee()
  }

  watch(() => employees, (state) => {
    localStorage.setItem("employees", JSON.stringify(state))
  }, { deep: true })

  return {
    employees, options, selectedSort,
    sortedEmployees, filteredAndSortedEmployees, searchQuery,
    addNewEmployee, employee, isEditModalOpen,
    isCreateModalOpen, updateEmployee, getEmployeeById,
    clearEmployee, deleteItem, isDeleteOpen
  }
})
