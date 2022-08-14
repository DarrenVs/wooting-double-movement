import { AppSettings } from "common";
import { Key } from "ts-keycode-enum";

export interface JoystickAngleConfiguration {
  upDiagonalAngle: number;
  useLeftRightAngle: boolean;
  leftRightAngle: number;
  analogRange: [number, number];
}

export const defaultLeftJoystickStrafingAngles: JoystickAngleConfiguration = {
  upDiagonalAngle: 0.52,
  useLeftRightAngle: true,
  leftRightAngle: 1.0,
  analogRange: [0.075, 0.9],
};

export interface JoystickKeyMapping {
  up?: number;
  up_two?: number;
  down?: number;
  down_two?: number;
  left?: number;
  left_two?: number;
  right?: number;
  right_two?: number;
}

export interface KeyMapping {
  leftJoystick: JoystickKeyMapping;
}

export const defaultKeyMapping: KeyMapping = {
  leftJoystick: {
    up: Key.W,
    down: Key.S,
    left: Key.A,
    right: Key.D,
  },
};

export const defaultToggleAccelerator = [];

export interface ServiceConfiguration {
  leftJoystickStrafingAngles: JoystickAngleConfiguration;
  keyMapping: KeyMapping;
  useAnalogInput: boolean;
}

export const defaultSettings: AppSettings = {
  doubleMovementEnabled: false,
  leftJoystickStrafingAngles: defaultLeftJoystickStrafingAngles,
  keyMapping: defaultKeyMapping,
  enabledToggleAccelerator: defaultToggleAccelerator,
  useAnalogInput: false,
};

export type SDKState =
  | { type: "Uninitialized" }
  | { type: "Error"; value: string }
  | { type: "DevicesConnected"; value: string[] }
  | { type: "NoDevices" };
