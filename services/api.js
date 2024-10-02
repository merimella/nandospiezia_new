// services/api.js
export const fetchLocalizedData = async (locale) => {
    const response = await fetch(`${process.env.STRAPI_API_URL}/pages?locale=${locale}`);
    const data = await response.json();
    return data;
  };
  