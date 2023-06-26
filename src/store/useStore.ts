import { create } from "zustand"
import { AuthState, createAuthSlice } from "./authSlice"
import { devtools } from "zustand/middleware"

export type Store = AuthState

export type StoreMiddelwares = [["zustand/devtools", never]]

export const useStore = create<Store>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
  })),
)
