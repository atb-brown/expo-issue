import { Text, TextProps } from "./Themed";
import * as React from "react";

/**
 * Created from Expo initialization.
 *
 * @param {TextProps} props Properties.
 * @return {Text}
 */
export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}
