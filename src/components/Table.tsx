'use client'

import { useState } from "react";
import AddUser from "./AddUser";
import Row from "./Row";

import type { NewUser, NewUsers } from "@/types/user";

interface TableProps {
    newUsers: NewUsers;
    //setState: React.Dispatch<React.SetStateAction<NewUser[]>>;
}


export function Table({ newUsers }: NewUsers) {
    const [newUserData, setNewUserData] = useState(newUsers)
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="w-full bg-red-900 flex justify-between gap-2 border-2 border-white border-solid">
                <p>First Name</p>
                <p>Last Name</p>
                <p>E-mail</p>
                <p>Dept</p>
                <p>Role</p>
                <p>Toggle Edit</p>
            </div>
            {newUserData.map(newUser => {
                return (
                        <Row 
                        newUser={newUser} 
                        setNewUserData={setNewUserData} 
                        key={newUser.new_user_id}
                        />
                )
            })}
        </div>
    )
}
/*
<AddUser />
*/