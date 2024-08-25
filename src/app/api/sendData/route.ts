import { supabase } from "@/utilities/supabaseClient"

export async function POST(request: Request):Promise<Response> {
  //console.log(request.headers.get('cookie'))
  //console.log(request)

  setTimeout(() => {
    console.log('timer is up')
  }, 1000*60*5)

  const id = await request.json()
  console.log(id)
  await supabase.from('new_user_list').delete().eq('new_user_id', id)
  const { data, error } = await supabase.from('new_user_list').select('*')
  if (error) {
    throw new Error('Unable to connect to supabase')
  }
  //console.log(data)
  return Response.json({ data })
}