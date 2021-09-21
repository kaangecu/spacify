import { api_key, apod_url, client } from "../consts";

export const getApod = async () => {
  let params = new URLSearchParams();
  params.append("api_key", api_key);

  const response = await client(apod_url).get("",{ params });

  return response?.data
};

export const getApodBetweenDates = async (startDate, endDate) => {

    let params = new URLSearchParams();
    params.append("api_key", api_key);

    startDate && params.append("start_date", startDate);
    endDate && params.append("end_date", endDate);
  
    const response = await client(apod_url).get("",{ params });
  
    return response?.data
};
