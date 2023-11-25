import { ExampleCard } from "@/components/example-card";
import { MovingBallClient } from "./moving-ball-client";

export function MovingBallExample() {
  return (
    <ExampleCard code={movingBallCode} language="tsx">
      <MovingBallClient />
    </ExampleCard>
  );
}


export const movingBallCode = `
// Note: Translating a ball like this is considered
// bad practice in React. We shouldn't modify the DOM
// directly, but it's just for demo

useAnimationFrame((time: DOMHighResTimeStamp) => {
  const seconds = time / 1000;
  const newPercentage = ((10 * seconds) % 100) + "%";
  document.getElementById("moving-ball")!.style.left = newPercentage;
});

return (
  <Box
    position="relative"
    height={16}
    bgcolor="#0000ff"
  >
    <Box
      id="moving-ball"
      position="absolute"
      width={16}
      height={16}
      borderRadius="50%"
      bgcolor="#ff0000"
    />
  </Box>
);
`.trim();

