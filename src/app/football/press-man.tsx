import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballPressMan() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Defensive Back: Press Man Techniques</Heading>
      <Text variant="body-default-l">
        Stay low and balanced at the line of scrimmage. Use your hands to disrupt the receiver’s release, but don’t grab. Mirror the receiver’s first move and keep your hips square.
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Stay low and balanced at the line of scrimmage.</li>
        <li>Use your hands to disrupt the receiver’s release, but don’t grab.</li>
        <li>Mirror the receiver’s first move and keep your hips square.</li>
      </ul>
    </Column>
  );
}
