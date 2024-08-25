interface NewUser {
    new_user_id: number;
    first_name: string;
    last_name: string;
    start_date: string;
    department: string;
    role: string;
};

interface DeleteButtonProps {
    id: number;
    setState: React.Dispatch<React.SetStateAction<NewUser[]>>;
  }

const fakeToken = 'something'

export default function DeleteButton({ id, setState }: DeleteButtonProps) {
    const handleClick = async () => {
        console.log('delete triggered')
        const sendData = await fetch('/api/sendData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer ' + fakeToken
            },
            body: JSON.stringify(id),
          });
        const updatedUserList = await sendData.json()
        console.log(updatedUserList.data)
        setState(updatedUserList.data)
    }
    return (    
        <button onClick={handleClick} className='border border-slate-500 py-1 px-2 rounded'>X</button>
    )
}

