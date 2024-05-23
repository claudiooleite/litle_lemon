import { useState } from "react";
import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export function SliderInput() {
  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <>
      <label htmlFor="guests">Number of Guests</label>
      <Flex>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          flex="1"
          focusThumbOnChange={false}
          value={value}
          onChange={handleChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="32px" children={value} />
        </Slider>
      </Flex>
    </>
  );
}
