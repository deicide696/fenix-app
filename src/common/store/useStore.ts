import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { AuthState, createAuthSlice } from "./slices"

export type Store = AuthState

export type StoreMiddelwares = [["zustand/devtools", never]]

export const useStore = create<Store>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
  })),
)
