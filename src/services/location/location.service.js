import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
  try {
    const res = await fetch(
      `${process.env.EXPO_PUBLIC_GEOCODE_URL}?city=${searchTerm}`
    );
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
