import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Statistics = () => {
  return (
    <>
      <Box
        css={{
          pt: '$20',
          pb: '$16',
          px: '$6',
        }}
      >
        <Flex direction={'column'} align={'center'}>
          <Text
            h3
            css={{
              textAlign: 'center',
            }}
          >
            Trusted by 5000+ developers & teams
          </Text>
          <Text
            span
            css={{
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            Gitfr has helped developers create beautiful, informative, and professional README.md files directly from their GitHub repositories — no hassle, just clarity.
          </Text>
        </Flex>

        <Flex
          direction={'row'}
          wrap={'wrap'}
          justify={'center'}
          css={{
            gap: '4rem',
            pt: '$16',
            '@sm': {
              gap: '10rem',
            },
          }}
        >
          <Flex direction={'column'}>
            <Text h2 css={{ color: '$blue600' }}>
              1,000+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              READMEs Generated
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text h2 css={{ color: '$blue600' }}>
              1500+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              GitHub Repos Processed
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text h2 css={{ color: '$blue600' }}>
              1,000+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              Contributors
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text h2 css={{ color: '$blue600' }}>
              4.9/5⭐
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              Avg. User Rating
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};