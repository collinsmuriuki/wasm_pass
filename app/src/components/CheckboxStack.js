import React from "react";
import { Stack, Checkbox } from "@chakra-ui/core";

const CheckboxStack = ({ nums, handleNums, chars, handleChars }) => {
  return (
    <Stack
      spacing={10}
      isInline
      pb={4}
      fontFamily="sans-serif"
      color="gray.500"
    >
      <Checkbox
        size="sm"
        variantColor="teal"
        defaultIsChecked={!nums}
        onChange={handleNums}
      >
        0-9
      </Checkbox>
      <Checkbox
        size="sm"
        variantColor="teal"
        defaultIsChecked={!chars}
        onChange={handleChars}
      >
        !@#$%^&*
      </Checkbox>
    </Stack>
  );
};

export default CheckboxStack;
