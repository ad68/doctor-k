import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const useAuthStore = create(
  persist(
    devtools((set) => ({
      authInfo: {},
      updateAuthInfo: (value) => set({ authInfo: value }),
    })),
    {
      name: "auth-storage",
    },
  ),
);
