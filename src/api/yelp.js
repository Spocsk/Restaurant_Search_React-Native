import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer QcaIFQsgPyZ-nEcAq65qP-vSfZFpPQXpOl8kcu44h8_J_au4wtBdcLx3hziwQRAaXJyJ1p_sPxTzXhy0tmoAQZt4yMGqh2qYmCYMtW1lVdXfjrGfZkHG8PgDMzUEYnYx",
  },
});
