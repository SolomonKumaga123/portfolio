import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballRouteRunning() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Wide Receiver: Route Running</Heading>
      <Text variant="body-default-l">
        Focus on sharp, precise cuts and staying low in your breaks. Sell every route with your body language—even if you’re not getting the ball. Understand how to adjust routes based on coverage.
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Focus on sharp, precise cuts and staying low in your breaks.</li>
        <li>Sell every route with your body language—even if you’re not getting the ball.</li>
        <li>Understand how to adjust routes based on coverage.</li>
      </ul>
    </Column>
  );
}
