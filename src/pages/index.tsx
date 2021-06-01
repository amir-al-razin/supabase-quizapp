import Head from "next/head";
import { useEffect, useState } from "react";
import Auth from "../lib/Auth";
import Account from "../lib/Account";
import { supabase } from "../utils/supabaseClient";
import { useSession } from "../store/useSession";

export default function Home() {
  const session = useSession((state) => state.session);
  const setSession = useSession((state) => state.setSession);

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
    
      {!session ? (
        <Auth />
      ) : (
        <Account session={session} key={session.user.id} />
      )}
    </div>
  );
}
