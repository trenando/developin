export interface Employee {
    id: number
    name: string,
    surname: string,
    patronymic: string,
    post: string,
    employmentHistory: boolean,
    money: number,
    startWork: string | undefined,
    payment: "half" | "full"
};

export type Options = Array<{
    title: string,
    value: string
}>

export type SelectedSort = "name" | "surname" | "patronymic" | "post" | "";
