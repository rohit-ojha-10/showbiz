export const verify = async () => {
  const token = localStorage.getItem("authToken");
  const verify = await axios.get("http://localhost:4000/authenticate", {
    headers: {
      Authorization: `Bearer ${token ? token : ""}`,
    },
  });
  if (!verify.data.success) {
    const refreshToken = localStorage.getItem("refreshToken");
    const verifyRefreshToken = await axios.get(
      "http://localhost:4000/authenticate",
      {
        headers: {
          Authorization: `Bearer ${refreshToken ? refreshToken : ""}`,
        },
      }
    );
  }
};
