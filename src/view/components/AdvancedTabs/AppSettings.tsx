import { VStack, HStack, Link, Text, Kbd } from "@chakra-ui/react";
import React from "react";
import { useRemoteValue } from "../../../ipc";
import { defaultToggleAccelerator } from "../../../native/types";
import { InfoTooltip } from "../general/InfoTooltip";
import {
  AcceleratorEditor,
  AcceleratorEditorRow,
} from "../settings/accelerator";

export function AppSettingsTab() {
  const [toggleAccelerator, setToggleAccelerator] = useRemoteValue(
    "enabledToggleAccelerator",
    defaultToggleAccelerator
  );

  function resetToDefault() {
    setToggleAccelerator(defaultToggleAccelerator);
  }

  return (
    <VStack align="baseline" spacing="2" height="100%" position="relative">
      <AcceleratorEditorRow
        titleChildren={"Toggle Hotkey"}
        infoTooltip={
          <Text pt="1" fontSize="sm">
            This allows you to configure the hotkey that toggles if Double
            Movement is active. Just click on the box and press the key combo
            you'd like to use, it will complete once a non-modifier key is
            pressed, e.g. <Kbd>A</Kbd>
          </Text>
        }
        acceleratorValue={toggleAccelerator}
        onAcceleratorChange={setToggleAccelerator}
      />

      <Link
        position="absolute"
        bottom="0px"
        as={Text}
        variant="plink"
        fontSize="sm"
        onClick={resetToDefault}
      >
        Reset to Wooting recommended
      </Link>
    </VStack>
  );
}
