import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballReleases() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Wide Receiver: Releases</Heading>
      <Text variant="body-default-l">
        Learn different releases (speed, hesitation, jab step) to beat press coverage. Practice footwork and hand fighting to get off the line cleanly. Work on timing your release with the snap count.
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Learn different releases (speed, hesitation, jab step) to beat press coverage.</li>
        <li>Practice footwork and hand fighting to get off the line cleanly.</li>
        <li>Work on timing your release with the snap count.</li>
      </ul>
    </Column>
  );
}
