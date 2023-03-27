import axios from "axios";

export const getAllPeoples = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people/");
    return { success: true, data: data.results };
  } catch (e) {
    console.error(e);
    return { success: false, data: [] };
  }
};