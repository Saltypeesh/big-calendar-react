import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAppointments = () => {
  return useQuery({
    queryKey: ["GET_APPOINTMENTS"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:7000/appointments");
      return data;
    },
  });
};
