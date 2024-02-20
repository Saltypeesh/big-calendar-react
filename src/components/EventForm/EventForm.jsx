/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field, Form, Formik } from "formik";
import { useMemo } from "react";

export default function EventForm({ appointment }) {
  const label = appointment?.id ? "Update" : "Create";

  const initialValues = useMemo(() => appointment, [appointment]);

  return (
    <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
      <Formik onSubmit={async () => {}} initialValues={initialValues}>
        {() => {
          return (
            <Form>
              <Text fontSize="3xl">{label} an appointment</Text>
              <Field name="location">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input {...field} />
                  </FormControl>
                )}
              </Field>
              <Field name="resource">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Resource</FormLabel>
                    <Input {...field} />
                  </FormControl>
                )}
              </Field>
              <Field name="address">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input {...field} />
                  </FormControl>
                )}
              </Field>
              <Flex gap={4}>
                <Flex flexBasis={"50%"}>
                  <Field name="start">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel>Start Time</FormLabel>
                        {/* <DatePicker label="Basic date time picker" /> */}
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex flexBasis={"50%"}>
                  <Field name="end">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel>End Time</FormLabel>
                        {/* <DateTimePicker label="Basic date time picker" /> */}
                      </FormControl>
                    )}
                  </Field>
                </Flex>
              </Flex>

              <Button mt={4} colorScheme={"whatsapp"} onClick={() => {}}>
                {label}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
