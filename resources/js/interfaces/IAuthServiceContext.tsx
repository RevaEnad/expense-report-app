export interface IAuthServiceContext {
    role: string|null;
    accessToken: string | null;
    loading: boolean;
    isLoggedIn: boolean;
    handleAuth: (email: string, password: string) => Promise<any>;
    handleLogout: (config?: any) => Promise<any>;
  }

  export const DefaultIAuthServiceContext = {
    role:null,
    accessToken: '',
    loading: false,
    isLoggedIn: false,
    handleAuth: (email: string, password: string) =>
    new Promise(() => {
      [];
    }),
    handleLogout: () =>
    new Promise(() => {
      [];
    }),
  }
