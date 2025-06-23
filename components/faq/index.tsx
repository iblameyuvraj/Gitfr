import { Button, Divider, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const faqList = [
  {
    question: 'What is Gitfr?',
    answer: 'Gitfr is an AI-powered tool that generates professional README.md files from your GitHub repository. Just paste your repo link — that’s it!',
  },
  {
    question: 'How much does it cost?',
    answer: 'Gitfr is priced for Indian devs: ₹150 for 1 month and ₹1600 for 12 months. No subscriptions. One-time payments only.',
  },
  {
    question: 'Can I use private repositories?',
    answer: 'Yes, with a GitHub access token you can generate READMEs for private repos. Gitfr doesn’t store any tokens or repo data.',
  },
  {
    question: 'I need something custom. Can I contact you?',
    answer: 'Of course! For custom enterprise tools, automation, or team access — email us at official.githubb@gmail.com.',
  },
];

export const Faq = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : faqList.length - 1));
  const next = () => setIndex((prev) => (prev + 1) % faqList.length);

  return (
    <>
      <Flex
        css={{
          py: '$20',
          gap: '$14',
          px: '$6',
        }}
        direction="column"
      >
        {/* Header */}
        <Flex align="center" direction="column">
          <Text span css={{ color: '$blue600' }}>FAQ</Text>
          <Text h2>Need Help? We’ve Got You.</Text>
          <Text
            span
            css={{
              maxWidth: '700px',
              color: '$accents8',
              textAlign: 'center',
            }}
          >
            Swipe through the most common questions about Gitfr — our AI-powered README generator for GitHub.
          </Text>
        </Flex>

        {/* FAQ Slider */}
        <Flex direction="column" align="center" css={{ gap: '$8' }}>
          <Flex css={{ gap: '$5', maxWidth: '700px' }} justify="center">
            <BoxIcon />
            <Flex direction="column" css={{ gap: '$3' }}>
              <Text h3>{faqList[index].question}</Text>
              <Text span css={{ color: '$accents8' }}>{faqList[index].answer}</Text>
            </Flex>
          </Flex>

          {/* Slider Buttons */}
          <Flex css={{ gap: '$5' }}>
            <Button auto flat onClick={prev}>
              ⬅ Prev
            </Button>
            <Button auto flat onClick={next}>
              Next ➡
            </Button>
          </Flex>

          {/* Dots (optional) */}
          <Flex css={{ gap: '$3', pt: '$2' }}>
            {faqList.map((_, i) => (
              <Box
                key={i}
                css={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: i === index ? '$blue600' : '$accents3',
                }}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};