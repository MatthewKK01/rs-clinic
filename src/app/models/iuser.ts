export interface IUser {
    id?: string;
    role: string,
    id_number: number,
    email: string,
    name: string,
    surname: string,
    rating?: number | null,
    photo?: string
}
