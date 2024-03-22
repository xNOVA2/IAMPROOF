import api from "./middleware";

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  try {
    const { data } = await api.post(`/auth/login`, { email, password,fcmToken:"12345567",registerType:"manual" });
    return {
      success: true,
      response: data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};
