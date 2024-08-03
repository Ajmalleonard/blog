import { api } from "../../../../config";

export async function getApiPosts() {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
}
