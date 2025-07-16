import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballZoneCoverage() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Defensive Back: Zone Coverage</Heading>
      <Text variant="body-default-l">
        Understand your zone responsibility and keep your eyes on the quarterback. Communicate with teammates to pass off receivers. Break on the ball quickly when it’s thrown in your area.
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Understand your zone responsibility and keep your eyes on the quarterback.</li>
        <li>Communicate with teammates to pass off receivers.</li>
        <li>Break on the ball quickly when it’s thrown in your area.</li>
      </ul>
    </Column>
  );
}
