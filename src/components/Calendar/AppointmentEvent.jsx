/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  // AppointmentStatusCode,
  EVENT_STATUS_COLORS,
} from "./Calendar.constants";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AppointmentEvent({ appointment, onDoubleClick }) {
  const { location, status, resource, address } = appointment;
  const background = EVENT_STATUS_COLORS[status];

  const [isOpen, setIsOpen] = useState(false);

  console.log("it rendered");

  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Box
            bg={background}
            p={1}
            height="100%"
            color="black"
            // onDoubleClick={() => onDoubleClick(appointment)}
            // onContextMenu={(e) => {
            //   e.stopPropagation();
            //   e.preventDefault();
            //   setIsOpen(true);
            // }}
          >
            <Flex alignItems={"center"} justifyContent="space-between">
              <Flex>
                <Text fontSize="xs">{location}</Text>
              </Flex>
              <Flex>
                <Text fontSize="xs">{resource}</Text>
              </Flex>
            </Flex>
            <Box mt={4}>
              {address.split("\n").map((add) => (
                // eslint-disable-next-line react/jsx-key
                <Text fontSize="xs">{add}</Text>
              ))}
            </Box>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Options</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>lol</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
