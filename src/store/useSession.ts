import create from "zustand";
import { combine, persist } from "zustand/middleware";

export const useSession = create(
  persist(
    combine({ session: null }, (set) => ({
      setSession: (session) => set((state) => ({ session })),
    })),
    { name: "session" }
  )
);
