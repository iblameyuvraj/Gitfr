import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Flex } from '../styles/flex';

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={'column'}
        css={{
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          px: '$6',
          py: '$20',
          flexDirection: 'column-reverse',
          '@sm': {
            justifyContent: 'space-around',
            px: '$32',
            flexDirection: 'row-reverse',
          },
          '@md': {
            px: '$64',
          },
        }}
      >
        <Flex direction="column" css={{ gap: '1.5rem' }}>
          {/* Testimonial 1 */}
          <Card>
            <Card.Body>
              <Flex css={{ py: '$10', gap: '$5' }}>
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text span css={{ maxWidth: '400px', color: '$accents8' }}>
                    “Gitfr changed the way I write documentation. It generates professional, clean README files right from my GitHub repo in seconds.”
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Alex Carter{' '}
                  </Text>
                  <Text span css={{ display: 'contents', color: '$accents8' }}>
                    - Full Stack Developer
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <Card.Body>
              <Flex css={{ py: '$10', gap: '$5' }}>
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text span css={{ maxWidth: '400px', color: '$accents8' }}>
                    “As a solo founder, this tool saved me hours. I just link my repo and boom — perfect README with features, usage, and badges.”
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Priya Mehra{' '}
                  </Text>
                  <Text span css={{ display: 'contents', color: '$accents8' }}>
                    - Indie Hacker
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          {/* Testimonial 3 */}
          <Card>
            <Card.Body>
              <Flex css={{ py: '$10', gap: '$5' }}>
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text span css={{ maxWidth: '400px', color: '$accents8' }}>
                    “My team uses Gitfr on every new project now. The clarity it brings to our repos is unmatched.”
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Michael Zhang{' '}
                  </Text>
                  <Text span css={{ display: 'contents', color: '$accents8' }}>
                    - Engineering Manager at DevCrew
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>

        {/* Left Content Block */}
        <Flex
          align={'start'}
          direction={'column'}
          css={{
            alignItems: 'center',
            '@sm': {
              alignItems: 'start',
            },
          }}
        >
          <Text span css={{ color: '$blue600' }}>
            Trusted by Developers
          </Text>
          <Text h3>What People Say</Text>
          <Text span css={{ color: '$accents8', maxW: '600px', pb: '$8' }}>
            Gitfr isn’t just another README generator — it’s your documentation
            partner. See how others are saving time and leveling up their repos.
          </Text>
        </Flex>
      </Flex>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};