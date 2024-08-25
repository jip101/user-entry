export interface NewUser {
    new_user_id: number;
    first_name: string;
    last_name: string;
    start_date: string;
    department: string;
    role: string;
};

export interface NewUsers {
    newUsers: NewUser[]
};