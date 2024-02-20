import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
``;

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  const { mutate: createAppointment, isPending: isCreating } = useMutation({
    mutationFn: async (appointment) => {
      const { data } = await axios.post("http://localhost:7000/appointments", {
        appointment,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GET_APPOINTMENTS"]);
    },
  });
  return { isCreating, createAppointment };
};

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();

  const { mutate: updateAppointment, isPending: isUpdating } = useMutation({
    mutationFn: async (appointment) => {
      const { data } = await axios.put("http://localhost:7000/appointments", {
        appointment,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GET_APPOINTMENTS"]);
    },
  });
  return { isUpdating, updateAppointment };
};

export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteAppointment, isPending: isDeleting } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `http://localhost:7000/appointments/${id}`
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GET_APPOINTMENTS"]);
    },
  });
  return { isDeleting, deleteAppointment };
};
