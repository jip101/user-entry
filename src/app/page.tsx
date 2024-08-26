import { supabase } from '@/utilities/supabaseClient'
import { Table } from '@/components/Table'
import { cookies } from 'next/headers';

export const revalidate = 0;

export default async function Home() {
  console.log('call for supabase data')
  const { data, error } = await supabase.from('new_user_list').select('*')
console.log(cookies().get('authorization'))
  if (error) {
    throw new Error('Unable to connect to supabase')
  }

  //console.log(data)
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-4 p-12">
        <Table newUsers={data}/>
      </main>
    </>
  );
}