const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const api = {
  Expertise: {
    GetTopExpertisesPhysicians: baseUrl + "expertise/TopExpertisesPhysicians",
  },
};
