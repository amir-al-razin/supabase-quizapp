import Head from "next/head";
import { useEffect, useState } from "react";
import Auth from "../lib/Auth";
import Account from "../lib/Account";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div className="flex justify-center min-h-screen py-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <button className="px-3 py-2 font-semibold text-white bg-green-500 rounded-sm hover:bg-green-600">
        supabase-quizapp
      </button> */}
      {!session ? (
        <Auth />
      ) : (
        <Account session={session} key={session.user.id} />
      )}
    </div>
  );
}
