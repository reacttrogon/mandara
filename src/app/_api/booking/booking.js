import { BASE_URL } from "../baseUrl";

export const booking = async (data) => {
  const {
    additional_note,
    cottage_package_id,
    date_from,
    date_to,
    delivery_date,
    is_delivered,
  } = data;

  try {
    const response = await BASE_URL.post("/api/v1/mandara/booking", {
      params: {
        additional_note: additional_note,
        cottage_package_id,
        date_from,
        date_to,
        delivery_date,
        is_delivered,
      },
    });
    console.log(response, "console from api function");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
