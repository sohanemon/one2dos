"use client";
import { Center } from "@chakra-ui/react";
import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <Center>
      <Watch
        wrapperStyle={{ marginTop: "50px" }}
        height='50'
        width='50'
        radius='48'
        color='#ed64a6'
        ariaLabel='watch-loading'
        visible={true}
      />
    </Center>
  );
}
