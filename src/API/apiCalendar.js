const API = "http://localhost:4000/api";
export const getCalendar = async () => {
  const res = await fetch(`${API}/calendar`);
  const response = await res.json();
  return response;
};

export const addOneDate = async (data) => {
  try {
    const res = await fetch(`${API}/calendar`, {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    return error;
  }
};
