import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

export default function Auth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      toast.success("Check your email for the login link!");
    } catch (error) {
      toast.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 form-widget ">
      <h1 className="p-3 text-6xl font-bold tracking-tighter text-transparent bg-gradient-to-r to-green-400 bg-clip-text from-green-600 via-green-500">
        You need to Login before starting Quiz
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center px-2 border-4 border-green-500 rounded-lg">
          <MdEmail className="text-3xl text-green-500" />
          <input
            className="px-2 py-2 text-xl font-semibold text-green-800 placeholder-green-800 rounded-md outline-none placeholder-opacity-60 "
            type="email"
            placeholder="Enter Email"
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
            className="w-full px-5 py-3 text-xl font-semibold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send link</span>}
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

function MdEmail(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
