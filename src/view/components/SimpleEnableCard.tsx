import React from "react";
import { useRemoteValue, useSDKState } from "../../ipc";
import {
  Flex,
  Heading,
  HStack,
  Icon,
  Kbd,
  Spacer,
  Switch,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Card } from "./general/Card";
import { PrettyAcceleratorName } from "../../accelerator";
import { WarningTwoIcon } from "@chakra-ui/icons";

export function SimpleEnableCard() {
  const [toggleAccelerator, _] = useRemoteValue("enabledToggleAccelerator");
  const toggleAcceleratorPretty = PrettyAcceleratorName(
    "display",
    toggleAccelerator
  ).split("+");
  const hasToggleHotkey = toggleAccelerator.length > 0;

  const [dmEnabled, setDmEnable] = useRemoteValue("doubleMovementEnabled");

  const [useAnalogInput, __] = useRemoteValue("useAnalogInput");
  const sdkState = useSDKState();
  const shouldWarnAnalog =
    dmEnabled && useAnalogInput && sdkState.type !== "DevicesConnected";

  function toggleDmEnabled() {
    const value = !dmEnabled;
    setDmEnable(value);
  }

  return (
    <Card p="6">
      <Flex direction="column" onClick={toggleDmEnabled} cursor="pointer">
        <HStack>
          <Heading>Enable Faster FF Movement</Heading>
          <Spacer />
          {shouldWarnAnalog && (
            <Tooltip
              label="360 Movement is enabled but there is no Wooting keyboard connected. Please disable the option in the “Analog” tab or connect a Wooting keyboard."
              placement="left"
            >
              <Icon as={WarningTwoIcon} color="orange" />
            </Tooltip>
          )}
          {/* Render switch as Div so onClick doesn't get triggered twice: https://github.com/chakra-ui/chakra-ui/issues/2854 */}
          <Switch colorScheme="accent" isChecked={dmEnabled} as="div"></Switch>
        </HStack>
        <Text pt="6" fontSize="md">
          {hasToggleHotkey ? (
            <>
              Or use the hotkey{" "}
              {toggleAcceleratorPretty
                .map((t) => <Kbd>{t}</Kbd>)
                .reduce((prev, current) => (
                  <>
                    {prev}+{current}
                  </>
                ))}{" "}
              to toggle FFF Sprint. (Configurable under Settings)
            </>
          ) : (
            <>
              Or bind the Toggle hotkey under Settings to be able to toggle
              FFF Sprint on the fly.
            </>
          )}
          <br />
          <br />
          Enhances your Movement settings via virtual gamepads:
          <br />
          <br />
          Standard: Sprint diagonally backwards
          <br />
          Legacy: Sprint in every direction (but, camera moves)
        </Text>
      </Flex>
    </Card>
  );
}
