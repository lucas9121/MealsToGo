import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
  try {
    const res = await fetch(
      `http://localhost:5001/mealstogo-2af32/us-central1/geocode?city=${searchTerm}`
    );

    if (!res.ok) {
      console.log("there was an error");
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];

  const { lat, lng } = geometry.location;
  const viewport = geometry.viewport;

  return { lat, lng, viewport };
};
