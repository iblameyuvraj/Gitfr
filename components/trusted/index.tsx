import { Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import {
  FaGithub,
  FaBolt,
  FaSearch,
  FaFileCode,
  FaUpload,
  FaCogs,
  FaCode,
  FaRocket
} from 'react-icons/fa';

export const Trusted = () => {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        css={{
          pt: '$20',
          px: '$6',
          '@md': {
            px: '$64',
          },
        }}
      >
        <Text h2 css={{ textAlign: 'center' }}>
          Features of Our GitHub README Generator
        </Text>
        <Text
          css={{
            color: '$accents8',
            maxWidth: '800px',
            textAlign: 'center',
          }}
          weight="normal"
          size="$lg"
        >
          Automatically generate professional README.md files using AI, straight from your GitHub repository. Save time, increase quality, and boost your repo's credibility.
        </Text>
        <Grid.Container
          gap={6}
          alignItems="center"
          justify="center"
          css={{
            width: '100%',
            '& span': {
              whiteSpace: 'pre',
            },
          }}
        >
          <Grid sm={3} justify="center">
            <Flex direction="column" align="center" css={{ textAlign: 'center' }}>
              <FaGithub size={40} />
              <Text weight="semibold" size="$lg">GitHub Integration</Text>
              <Text size="$sm">Connect directly with your GitHub repos for seamless generation.</Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex direction="column" align="center" css={{ textAlign: 'center' }}>
              <FaBolt size={40} />
              <Text weight="semibold" size="$lg">Instant Generation</Text>
              <Text size="$sm">Generate high-quality READMEs in just a few clicks.</Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex direction="column" align="center" css={{ textAlign: 'center' }}>
              <FaSearch size={40} />
              <Text weight="semibold" size="$lg">Smart Detection</Text>
              <Text size="$sm">Analyzes your codebase to suggest relevant content.</Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex direction="column" align="center" css={{ textAlign: 'center' }}>
              <FaFileCode size={40} />
              <Text weight="semibold" size="$lg">Markdown Styling</Text>
              <Text size="$sm">Applies clean and professional markdown formatting.</Text>
            </Flex>
          </Grid>
          
        </Grid.Container>
      </Flex>
      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};
