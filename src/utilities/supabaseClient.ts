import { createClient } from '@supabase/supabase-js'

import type { NewUser, NewUsers } from '@/types/user'

// Create a single supabase client for interacting with your database
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PRIVATE_KEY) {
    throw new Error("Missing Supabase env variables")
}
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PRIVATE_KEY)

//const getList = supabase.from('new_user_list').select('*')

const getAllUsers = async () => {
    try{
        const { data, error } = await supabase.from('new_user_list').select('*')
        if (error) {
          throw new Error('Unable to retrieve data from Supabase')
        }
        data
      } catch (error) {
        return error
    }
}

const deleteUser = async (id: number) => {
    try{
        const { error: deleteUserError } = await supabase.from('new_user_list').delete().eq('new_user_id', id)
        if (deleteUserError) {
            throw new Error('Unable to delete user: ' + id)
        }
        const { data, error } = await supabase.from('new_user_list').select('*')
        if (error) {
            throw new Error('Unable to retrieve new users list')
        }
        else{
            return data
        }
    } catch(error) {
        return error
    }
}

const editUser = async (newUser: NewUser, staff: string) => {
    try {
        // check supabase if row is locked
        // if locked(avail = false), return message
        // if unlocked(avail = true), lock row(set avail to false)
        // then supabaseClient.update(user with id and staff)

    } catch(error) {

    }
}

const addUser = async (newUser: NewUser) => {
    try {
        // 
    } catch(error) {

    }
}

/*
const changeStaff = async () => {
    try {
        // 
    } catch(error) {

    }
}
*/