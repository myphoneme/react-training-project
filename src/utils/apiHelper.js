const apiRequest = async (method, url, data = null, headers = {}) => {
  const token = localStorage.getItem("accessToken");

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (token) { //comment tested
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method: method.toUpperCase(),
    headers: defaultHeaders,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);

    if (response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export default apiRequest;
