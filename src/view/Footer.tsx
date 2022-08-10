import React from "react";
import { Flex, HStack, Icon, Link, Tooltip } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IoLogoDiscord, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

export function Footer(props: {
  appVersion: string;
  onVersionClicked: () => void;
}) {
  return (
    <Flex p="6" pt="0" justifyContent="space-between" alignItems="center">
      <HStack>
        {/* <Tooltip label="Learn more about Wooting" hasArrow variant="accent">
          <Link href="https://wooting.io" isExternal >
            <Icon as={IoHome} />
          </Link>
        </Tooltip> */}
        {/* <Tooltip label="Join the community" hasArrow variant="accent">
          <Link href="https://wooting.io/discord" isExternal>
            <Icon as={IoLogoDiscord} />
          </Link>
        </Tooltip>
        <Tooltip label="Talk with us" hasArrow variant="accent">
          <Link href="https://twitter.com/wootingkb" isExternal>
            <Icon as={IoLogoTwitter} />
          </Link>
        </Tooltip> */}
        <Tooltip
          label="It’s open source, check the code"
          hasArrow
          variant="accent"
        >
          <Link
            href="https://github.com/DarrenVs/wooting-double-movement"
            isExternal
          >
            <Icon as={IoLogoGithub} />
          </Link>
        </Tooltip>
      </HStack>
      <Link href="https://github.com/ViGEm" isExternal fontSize="sm">
        Powered by ViGEm
        <ExternalLinkIcon mx="2px" />
      </Link>
      <Tooltip label="View changelog" hasArrow variant="accent">
        <Link
          // href={`https://github.com/DarrenVs/wooting-double-movement/releases/tag/v${props.appVersion}`}
          onClick={props.onVersionClicked}
          // isExternal
          fontSize="sm"
        >
          Version: {props.appVersion}
        </Link>
      </Tooltip>
    </Flex>
  );
}
