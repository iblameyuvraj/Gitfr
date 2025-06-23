import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Box
        css={{
          pt: '$20',
          pb: '$16',
          px: '$6',
        }}
      >
        <Flex direction="column" align="center" css={{ gap: '$8' }}>
          <Text h3 css={{ textAlign: 'center' }}>
            Affordable Pricing for Developers 
          </Text>
          <Text span css={{ maxWidth: '600px', textAlign: 'center' }}>
            Gitfr makes generating clean, powerful README files simple and affordable.
            No subscriptions, no extra fees — just one-time payments that make sense.
          </Text>

          <Flex
            wrap="wrap"
            justify="center"
            css={{
              gap: '2rem',
              pt: '$10',
              '@sm': {
                gap: '4rem',
              },
            }}
          >
            {/* Plan 1: Monthly */}
            <Card css={{ p: '$6', mw: '300px' }}>
              <Card.Body>
                <Flex direction="column" align="center" css={{ gap: '$5' }}>
                  <Text h4>Starter Plan</Text>
                  <Text h2 css={{ color: '$blue600' }}>₹150</Text>
                  <Text span>Valid for 1 month</Text>
                  <Text span css={{ textAlign: 'center', color: '$accents7' }}>
                    Great for quick projects or students
                  </Text>
                  <Button color="primary">Get Started</Button>
                </Flex>
              </Card.Body>
            </Card>

            {/* Plan 2: Yearly */}
            <Card css={{ p: '$6', mw: '300px' }}>
              <Card.Body>
                <Flex direction="column" align="center" css={{ gap: '$5' }}>
                  <Text h4>Pro Plan</Text>
                  <Text h2 css={{ color: '$blue600' }}>₹1600</Text>
                  <Text span>Valid for 12 months</Text>
                  <Text span css={{ textAlign: 'center', color: '$accents7' }}>
                    Best value for regular developers & indie teams
                  </Text>
                  <Button color="primary">Get Pro</Button>
                </Flex>
              </Card.Body>
            </Card>

            {/* Plan 3: Enterprise */}
            <Card css={{ p: '$6', mw: '300px' }}>
              <Card.Body>
                <Flex direction="column" align="center" css={{ gap: '$5' }}>
                  <Text h4>Enterprise Plan</Text>
                  <Text h2 css={{ color: '$blue600' }}>Custom</Text>
                  <Text span>Includes advanced features</Text>
                  <Text span css={{ textAlign: 'center', color: '$accents7' }}>
                    For startups, agencies, or organizations with special needs
                  </Text>
                  <Button
                    as="a"
                    href="mailto:official.githubb@gmail.com"
                    color="secondary"
                  >
                    Contact Us
                  </Button>
                </Flex>
              </Card.Body>
            </Card>
          </Flex>
        </Flex>
      </Box>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};