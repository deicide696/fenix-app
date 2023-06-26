import { StateCreator } from "zustand"
import { Store, StoreMiddelwares } from "./useStore"

export interface AuthState {
  auth: {
    isAuth: boolean
    userName: string
    signIn: () => void
    signOut: () => void
  }
}

export const createAuthSlice: StateCreator<Store, StoreMiddelwares, [], AuthState> = (set) => ({
  auth: {
    isAuth: false,
    userName: "",
    signOut: () =>
      set(
        (state) => ({
          auth: {
            ...state.auth,
            isAuth: false,
          },
        }),
        false,
        { type: "AUTH/SIGN_OUT" },
      ),
    signIn: () =>
      set(
        (state) => ({
          auth: {
            ...state.auth,
            isAuth: true,
          },
        }),
        false,
        { type: "AUTH/SIGN_IN" },
      ),
  },
})
