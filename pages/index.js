import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="px-3 py-2 font-semibold text-white bg-green-500 rounded-sm hover:bg-green-600">
        supabase-quizapp
      </button>
    </div>
  );
}
