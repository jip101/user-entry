import { supabase } from "@/utilities/supabaseClient"

export async function GET(request: Request):Promise<Response> {
  try{

    const { data, error } = await supabase.from('new_user_list').select('*')
    if (error) {
      throw new Error('Unable to retrieve data from Supabase')
    }
    return Response.json({ data })
  } catch (error) {
    return Response.json({error: 'Error connecting to database'}, {status: 500})
  }
}