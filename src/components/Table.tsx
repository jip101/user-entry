'use client'

import { useState } from "react";
import DeleteButton from "./DeleteButton";
import AddUser from "./AddUser";

interface TableProps {
    newUsers: NewUsers;
    setState: React.Dispatch<React.SetStateAction<NewUser[]>>;
}

interface NewUser {
    new_user_id: number;
    first_name: string;
    last_name: string;
    start_date: string;
    department: string;
    role: string;
};

interface NewUsers {
    newUsers: NewUser[]
};

export function Table({ newUsers }: NewUsers) {
    const [newUserData, setNewUserData] = useState(newUsers)
    //console.log(newUserData)
    return (
        <>
        {newUserData.map(newUser => {
            return (
                <div key={newUser.new_user_id} className='flex gap-2'>
                <div>{newUser.first_name + ' ' + newUser.last_name}</div>
                <DeleteButton id={newUser.new_user_id} setState={setNewUserData} />
              </div>
            )
        })}
        <AddUser />
        </>
    )
}