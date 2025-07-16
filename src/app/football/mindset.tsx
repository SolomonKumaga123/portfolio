import { Column, Heading, Text } from "@once-ui-system/core";

export default function FootballMindset() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="32">
      <Heading variant="display-strong-l">Mindset & Learning</Heading>
      <Text variant="body-default-l">
        Watch games and take notes on players at your position. Ask questions, join online forums, and never stop learning. Even if you’re not on a team yet, you can always improve your football IQ!
      </Text>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>Watch games and take notes on players at your position.</li>
        <li>Ask questions, join online forums, and never stop learning.</li>
        <li>Even if you’re not on a team yet, you can always improve your football IQ!</li>
      </ul>
    </Column>
  );
}
