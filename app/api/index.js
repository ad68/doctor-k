const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const api = {
  Expertise: {
    getTopExpertisesPhysicians: baseUrl + "expertise/TopExpertisesPhysicians",
    getExpertiseList: baseUrl + "expertise",
  },
};
