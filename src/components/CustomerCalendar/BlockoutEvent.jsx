/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";

export default function BlockoutEvent({ blockout }) {
  return (
    <Flex
      bg="lightgray"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Text color={"gray"} fontWeight="bold" fontSize={"s"} textAlign="center">
        {blockout.name}
      </Text>
    </Flex>
  );
}
