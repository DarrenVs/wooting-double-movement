import React from "react";
import { Flex, Spacer, Icon, IconButton, Center } from "@chakra-ui/react";
import { MinusIcon, CloseIcon } from "@chakra-ui/icons";
import { ipcRenderer } from "electron";

declare module "react" {
  interface CSSProperties {
    WebkitAppRegion?: "drag" | "no-drag";
  }
}

export function Header() {
  return (
    <Flex
      justify="space-between"
      w="full"
      p="6"
      pb="0"
      background="#FFFFFF"
      style={{ WebkitAppRegion: "drag" }}
      borderTopLeftRadius="18px"
      borderTopRightRadius="18px"
    >
      <Center>
        <Icon viewBox="0 0 250 155" color="#191919" w={12} h={8}>
          <path
            fill="currentColor"
            d="M0,0.1v154.8h250V0.1H0z M228.7,134.7H21.3V20.3h207.4V134.7z"
          />
          <polygon
            fill="currentColor"
            points="195.3,112.5 206,44.7 176.6,44.7 171.3,83.1 141.2,83.1 141.2,44.7 110.9,44.7 110.9,83.1 78.7,83.1 
          73.4,44.7 44.1,44.7 54.7,112.5 	"
          />
        </Icon>
      </Center>
      <Spacer />
      <Flex style={{ WebkitAppRegion: "no-drag" }}>
        <IconButton
          aria-label="Minimise"
          onClick={() => ipcRenderer.send("windowMinimize")}
          icon={<MinusIcon />}
          variant="ghost"
        />
        <IconButton
          aria-label="Close"
          ml="1"
          onClick={() => ipcRenderer.send("windowClose")}
          icon={<CloseIcon />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}