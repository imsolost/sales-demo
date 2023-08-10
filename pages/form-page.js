import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import DashboardList from "../components/dashboard";
import Header from "../components/header";
import Iframe from "../components/iframe";

const FormPage = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL, process.env.NEXT_PUBLIC_KEY)
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await client
        .from('users')
        .select()
        .eq('id', '1')

      setUser(data[0])      
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <Header />
      <DashboardList />
      <Iframe currentUser={user} />
    </div>
  );
};

export default FormPage;