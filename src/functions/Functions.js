import axios from "axios";

async function fetchIndicatorById(id, baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/indicator/${id}`);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
}

async function fetchIndicators(baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/indicator`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getUser(user_id, baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/user/${user_id}`);
    return res.data[0].user_name;
  } catch (error) {
    console.log(error);
  }
}

async function fetchIndicatorWithUser(id, baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/indicator/${id}/user`);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
}

export { fetchIndicators, fetchIndicatorById, getUser, fetchIndicatorWithUser };
