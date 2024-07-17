import { z } from "zod";

export const newCustomerValidation = () => {
  return {
    firstName: z.string().min(1, "نام الزامی است."),
    lastName: z.string().min(1, "نام خانوادگی الزامی است. "),
    nationalCode: z.string()
  };
};
