const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const api = {
  expertise: {
    getExpertiseList: baseUrl + "expertise",
    GetTopExpertisesPhysicians: baseUrl + "expertise/TopExpertisesPhysicians",
   
  },
};
