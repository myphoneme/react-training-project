// services/api.js
const BASE_URL = "http://fastapi.phoneme.in/users";
const CATEGORY_URL = "http://fastapi.phoneme.in/categories";
const POST_URL = "http://fastapi.phoneme.in/posts";
import { API_URL, BASE_URL as BASEURL } from "../../config";
export const getUsers = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

/***********************  CATEGORY ****************************** */

// Fetch categories
export const getCategories = async () => {
  const response = await fetch(CATEGORY_URL);
  return response.json();
};

// Add a new category
export const addCategories = async (category) => {
  const response = await fetch(CATEGORY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  return response.json();
};

// Update an existing category
export const updateCategories = async (category_id, category) => {
  const response = await fetch(`${CATEGORY_URL}/${category_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  return response.json();
};

// Delete a category
export const deleteCategory = async (category_id) => {
  const response = await fetch(`${CATEGORY_URL}/${category_id}`, {
    method: "DELETE",
  });
  return response.json();
};

/***********************  POST ****************************** */

// Fetch categories
export const getPosts = async () => {
  const response = await fetch(POST_URL);
  return response.json();
};

// Fetch categories
export const getPostById = async (id) => {
  const response = await fetch(`${POST_URL}/${id}`);
  return response.json();
};

// Add a new post
export const addPosts = async (post) => {
  const response = await fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Update an existing category
export const updatePosts = async (post_id, post) => {
  const response = await fetch(`${POST_URL}/${post_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

// Delete a category
export const deletePost = async (post_id) => {
  const response = await fetch(`${POST_URL}/${post_id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const get_posts_by_category_id = async (category_id) => {
  const response = await fetch(
    `${API_URL}get_posts_by_category_id/${category_id}`
  );
  return response.json();
};

export const login = async (data) => {
  const response = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
