import { defineStore } from "pinia";

export const useMemberStore = defineStore({
  id: "member",
  state: () => ({
    authenticated: false,
    email: "",
  }),
  getters: {
    isAuthenticated: (state) => state.authenticated,
  },
  actions: {
    authenticate(email: string) {
      this.authenticated = true;
      this.email = email;
    },
    logOut() {
      this.authenticated = false;
    },
  },
});
