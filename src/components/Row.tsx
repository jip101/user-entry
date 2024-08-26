import { useState } from "react"
import DeleteButton from "./DeleteButton"

import type { NewUser } from "@/types/user"

interface RowProps {
    newUser: NewUser,
    setNewUserData: React.Dispatch<React.SetStateAction<NewUser[]>>
}

export default function Row({ newUser, setNewUserData }: RowProps) {
    const [edit, setEdit] = useState(false)

    const handleClick = () => setEdit(!edit)

    const email = newUser.first_name[0] + '.' + newUser.last_name + '@nvrh.org'

    return edit ?  (
        <div key={newUser.new_user_id} className='w-full flex justify-between gap-2 border-2 border-white border-solid'>
            <input type="text" defaultValue={newUser.first_name} className="bg-black border-2 border-white border-solid" />
            <input type="text" defaultValue={newUser.last_name} className="bg-black border-2 border-white border-solid" />
            <input type="text" defaultValue={email} className="bg-black border-2 border-white border-solid" />
            <Selectbox arr={departments} userField={newUser.department}/>
            <Selectbox arr={roles} userField={newUser.role} />
            <DeleteButton id={newUser.new_user_id} setState={setNewUserData} />
            <button onClick={handleClick}>Edit</button>
        </div>
    ) : (
        <>
            <DisplayUser newUser={newUser} handleClick={handleClick}/>
        </>
    )
}

function DisplayUser({ newUser, handleClick }: {newUser: NewUser, handleClick: () => void }) {
    const email = newUser.first_name[0] + '.' + newUser.last_name + '@nvrh.org'
    return (
        <main key={newUser.new_user_id} className='w-full flex justify-between gap-2 border-2 border-white border-solid'>
                <p>{newUser.first_name}</p>
                <p>{newUser.last_name}</p>
                <p>{email}</p>
                <p>{newUser.department}</p>
                <p>{newUser.role}</p>
                <input type="checkbox" />
                {/*

                    <p>assigned_staff(select)</p>
                <p>completed(checkbox)</p>
                */}
                <button onClick={handleClick}>Edit</button>
        </main>
    )
}


function Selectbox({ arr, userField }: {arr: string[], userField: string}) {
    return (
        <select className="bg-black w-40" defaultValue={userField}>
            {arr.map(item => {
                return <option value={item} key={item}>{item}</option>
            })}
        </select>
    )
}

const departments = [
    "Med/Surg",
    "Radiology",
    "ICU",
    "Emergency",
    "Pediatrics",
    "Obstetrics and Gynecology",
    "Cardiology",
    "Orthopedics",
    "Pharmacy",
    "Administration"
];

const roles = [
    "Registered Nurse",
    "Physician",
    "Surgeon",
    "Radiologist",
    "Pharmacist",
    "Hospital Administrator",
    "Physical Therapist",
    "Lab Technician",
    "Paramedic",
    "Oncologist",
    "Respiratory Therapist",
    "Medical Assistant",
    "Emergency Medical Technician",
    "Nurse Practitioner",
    "Pediatrician"
];