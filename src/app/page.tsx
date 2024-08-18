'use client'
import { useState } from "react";

const fields: string[] = [
  'First Name',
  'Last Name',
  'Start Date',
  'Department',
  'Role'
]

type FormStateObj = Record<string, string>

export default function Home() {
  const [formData, setFormData] = useState(() => fields.reduce<FormStateObj>((obj, field)=> {
    obj[field] = '';
    return obj
  }, {}))
  
  const minDate = new Date().toISOString().split("T")[0];


  console.log(formData)
  return (
    <>
      <header className="flex justify-center pt-2 text-2xl">
        NVRH Employee Transfer Form
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form className='flex flex-col justify-center'>
          {fields.map(field => {
            return (
              <div key={field}>
              <label htmlFor={field} className="flex flex-col items-start gap-1">
                    {field} 
                    <input 
                      className="text-black mb-4"
                      name={field}
                      id={field}
                      min={field === 'Start Date' ? minDate : ''}
                      type={field === 'Start Date' ? "date" : "text"} 
                      value={formData[field]} 
                      onChange={e => setFormData({ ...formData, [field]: e.target.value })} 
                    />
              </label>
              </div>
            )
          })}
          <button type='submit' />
        </form>
      </main>
    </>
  );
}