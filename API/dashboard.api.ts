import api from "./middleware";

export const getDashboardData = async () => {
  try {
    const { data } = await api.get(`/user/analytics/dashboard`);
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
export const getAllUsers = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => {
  try {
    const { data } = await api.get(
      `/user/all-users?limit=${limit || 10}&page=${page || 1}`
    );
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

export const toggleBlock = async (userId: string, isActive?: boolean) => {
  try {
    const { data } = await api.put(`/user/toggle/deactive/${userId}`, {
      status: isActive,
    });
    console.log(data);

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

export const topWearables = async () => {
  try {
    const { data } = await api.get(`/watch/top-watches`);
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
