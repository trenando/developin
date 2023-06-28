import { Employee } from "../Types";

export const employeesArray: Array<Employee> = [
    {
        id: 1,
        name: "Иван",
        surname: "Петров",
        patronymic: "Иванович",
        post: "Сотрудник",
        employmentHistory: false,
        money: 100,
        startWork: "",
        payment: "half"
    },
    {
        id: 2,
        name: "Петр",
        surname: "Сидоров",
        patronymic: "Васильевич",
        post: "Сотрудник",
        employmentHistory: false,
        money: 100,
        startWork: "",
        payment: "full"
    },
    {
        id: 3,
        name: "Дмитрий",
        surname: "Кузнецов",
        patronymic: "Алексеевич",
        post: "Старший сотрудник",
        employmentHistory: false,
        money: 200,
        startWork: "",
        payment: "full"
    }
]