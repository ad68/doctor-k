import { sign } from "crypto";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const api = {
  Expertise: {
    getTopExpertisesPhysicians: baseUrl + "expertise/TopExpertisesPhysicians",
    getExpertiseList: baseUrl + "expertise",
  },
  Miscellaneous: {
    getMiscellaneous: baseUrl + "miscellaneous/faq",
  },
  authentication: {
    sendOtp: baseUrl + 'auth/sendOtp',
    login:baseUrl +'auth/login',
    returnProfile:baseUrl+'auth/returnProfile',
    physician:{
      completeProfile:baseUrl+'physician',
    }
  }
};
