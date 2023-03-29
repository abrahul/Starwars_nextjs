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

export const getPeopleByID = async (ID) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/${ID}`);
    return { success: true, data };
  } catch (e) {
    console.error(e);
    return { success: false, data: {} };
  }
};

export const getStarshipByID = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return(data)
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const getStarship = async (ID) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/${ID}`);
    return data;
  } catch (e) {
    console.error(e);
    return {};
  }
};


export const getPeopleByUrl = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return  data ;
  } catch (e) {
    console.error(e);
    return  {} ;
  }
};