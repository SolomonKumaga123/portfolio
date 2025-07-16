import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* Football Skills Navigation Section */}
      <RevealFx translateY="24" delay={0.7} fillWidth horizontal="center" paddingY="32" id="football-for-beginners">
        <Column fillWidth gap="xl" maxWidth="m" style={{ background: 'var(--brand-alpha-weak)', borderRadius: '1.5rem', padding: '2rem' }}>
          <Heading as="h2" variant="display-strong-l" style={{ textAlign: 'center' }}>
            Football for Beginners: Explore Each Skill
          </Heading>
          <Text variant="body-default-l" style={{ textAlign: 'center' }}>
            My name is Solomon Kumaga. I haven't joined a team yet, but I'm passionate about learning and sharing football knowledge—especially for those just starting out. Click a skill below to dive deep into each part of the game!
          </Text>
          <Column gap="l" as="nav" style={{ alignItems: 'center' }}>
            <Button href="/football/releases" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Wide Receiver: Releases</Button>
            <Button href="/football/route-running" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Wide Receiver: Route Running</Button>
            <Button href="/football/catching" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Wide Receiver: Catching</Button>
            <Button href="/football/press-man" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Defensive Back: Press Man Techniques</Button>
            <Button href="/football/zone-coverage" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Defensive Back: Zone Coverage</Button>
            <Button href="/football/mindset" variant="primary" size="l" style={{ width: '100%', maxWidth: 400 }}>Mindset & Learning</Button>
          </Column>
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
