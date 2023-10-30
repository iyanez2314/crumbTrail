import { View, Text, Image, Pressable } from "react-native";
import { Popover, FormControl, Input, Button, Box } from "native-base";
import React, { useRef, useState } from "react";

export default function HomeHeading() {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  const closePopOver = () => setIsPopOverOpen(false);
  const openPopOver = () => setIsPopOverOpen(true);
  return (
    <View className="flex flex-row justify-between items-center p-3 ">
      <View>
        <Text className="text-2xl font-bold">Welcome Back👋</Text>
        <Text className="text-base font-light">Hello, Isaac Yanez</Text>
      </View>
      <Example
        isPopOverOpen={isPopOverOpen}
        closePopOver={closePopOver}
        openPopOver={openPopOver}
      />
    </View>
  );
}

function Example({ isPopOverOpen, closePopOver, openPopOver }: any) {
  const initialFocusRef = useRef(null);
  return (
    <Box w="20%" alignItems="center">
      <Popover
        isOpen={isPopOverOpen}
        onClose={closePopOver}
        initialFocusRef={initialFocusRef}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps} className="" onPress={openPopOver}>
              <Image
                source={require("../assets/test_pfp.png")}
                className="object-contain w-20 h-20 rounded-full"
              />
            </Pressable>
          );
        }}
      >
        <Popover.Content width="56" backgroundColor={"amber.500"}>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Personal Details</Popover.Header>
          <Popover.Body>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "xs",
                  fontWeight: "medium",
                }}
              >
                First Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label
                _text={{
                  fontSize: "xs",
                  fontWeight: "medium",
                }}
              >
                Last Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" />
            </FormControl>
          </Popover.Body>
          <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button className="bg-[#F29FBC]">Save</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
  );
}
