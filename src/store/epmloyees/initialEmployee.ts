import { Employee } from "../Types";

export const initialEmployee: Employee = {
    id: Date.now(),
    name: "",
    surname: "",
    patronymic: "",
    post: "",
    employmentHistory: false,
    money: 0,
    startWork: "",
    payment: "half"
}