import axios from "axios";

function convertDate(created_at) {
  const isoString = created_at;
  const dateObj = new Date(isoString);
  const simpleDate = dateObj.toLocaleDateString("en-CA");
  return simpleDate;
}

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

async function getAllUsers(baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/user`);
    return res.data;
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

async function editIndicator(indicator, id, baseUrl) {
  try {
    await axios.put(`${baseUrl}/indicator/${id}`, indicator);
  } catch (error) {
    console.log(error);
  }
}

async function createIndicator(indicator, baseUrl) {
  try {
    await axios.post(`${baseUrl}/indicator`, indicator);
    return "Success";
  } catch (error) {
    console.log(error);
  }
}

async function createBlog(blog, baseUrl) {
  try {
    await axios.post(`${baseUrl}/blog`, blog);
    return "Success";
  } catch (error) {
    console.log(error);
  }
}

async function editBlog(blog, id, baseUrl) {
  try {
    await axios.put(`${baseUrl}/blog/${id}`, blog);
    return "Success";
  } catch (error) {
    console.log(error);
  }
}

async function fetchAllBlogs(baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/blog`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogById(blogId, baseUrl) {
  try {
    const res = await axios.get(`${baseUrl}/blog/${blogId}`);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchIndicators,
  fetchIndicatorById,
  getUser,
  getAllUsers,
  fetchIndicatorWithUser,
  editIndicator,
  createIndicator,
  createBlog,
  editBlog,
  fetchAllBlogs,
  fetchBlogById,
  convertDate,
};
