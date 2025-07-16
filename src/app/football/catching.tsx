import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballCatching() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Wide Receiver: Catching</Heading>
      <Text variant="body-default-l">
        Catch with your hands, not your body—use soft hands and look the ball in. Practice high-pointing the ball and catching in traffic. Work on catching from different angles and speeds.
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Catch with your hands, not your body—use soft hands and look the ball in.</li>
        <li>Practice high-pointing the ball and catching in traffic.</li>
        <li>Work on catching from different angles and speeds.</li>
      </ul>
    </Column>
  );
}
