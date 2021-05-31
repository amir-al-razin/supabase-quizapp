import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 form-widget ">
      <h1 className="text-5xl font-bold tracking-tighter text-green-500">
        You need to Login before starting Quiz
      </h1>

      <div>
        <input
          className="px-2 py-2 font-semibold text-gray-800 text-green-800 placeholder-green-800 placeholder-opacity-50 border-4 border-green-500 rounded-sm outline-none "
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          className="block px-5 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-sm hover:bg-green-600"
          disabled={loading}
        >
          {loading ? <span>Loading</span> : <span>Send link</span>}
        </button>
      </div>
    </div>
  );
}
