// had to connect all stuf
import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <Flex css={{ py: '$20', px: '$6' }}>
         <Box as="footer" css={{ width: '100%' }}>
            <Flex
               justify="center"
               wrap="wrap"
               align="center"
               css={{
                  gap: '$10',
                  '& ul': { margin: 0 },
               }}
            >
               {/* Legal Section */}
               <Flex css={{ gap: '$5', w: '250px' }} direction="column" align="center">
                  <Text h5>Legal</Text>
                  <Box as="ul" css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as="li">
                        <Link href="/terms" css={{ color: '$accents8' }}>
                           Terms of Service
                        </Link>
                     </Box>
                     <Box as="li">
                        <Link href="/privacy" css={{ color: '$accents8' }}>
                           Privacy Policy
                        </Link>
                     </Box>
                     <Box as="li">
                        <Link href="/cookies" css={{ color: '$accents8' }}>
                           Cookies
                        </Link>
                     </Box>
                     <Box as="li">
                        <Link href="/disclaimer" css={{ color: '$accents8' }}>
                           Disclaimer
                        </Link>
                     </Box>
                  </Box>
               </Flex>

               {/* Social Links */}
               <Flex css={{ gap: '$5', w: '250px' }} direction="column" align="center">
                  <Text h5>Follow Us</Text>
                  <Box as="ul" css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as="li">
                        <Link href="https://instagram.com" target="_blank" css={{ color: '$accents8' }}>
                           Instagram
                        </Link>
                     </Box>
                     <Box as="li">
                        <Link href="https://twitter.com" target="_blank" css={{ color: '$accents8' }}>
                           Twitter (X)
                        </Link>
                     </Box>
                     <Box as="li">
                        <Link href="https://linkedin.com" target="_blank" css={{ color: '$accents8' }}>
                           LinkedIn
                        </Link>
                     </Box>
                  </Box>
               </Flex>
            </Flex>

            {/* Bottom Section */}
            <Box
               css={{
                  px: '$10',
                  '@md': { px: '$56' },
               }}
            >
               <Divider css={{ mt: '$14' }} />
               <Flex
                  align="center"
                  wrap="wrap"
                  css={{
                     pt: '$8',
                     gap: '$10',
                     justifyContent: 'center',
                     '@md': { justifyContent: 'space-between' },
                  }}
               >
                  <Box />  
                  <Flex css={{ gap: '$6' }}>
                     <Text span css={{ color: '$accents8' }}>
                        © {currentYear}, Made by Yuvraj. 
                     </Text>
                  </Flex>
                  <Flex css={{ gap: '$6' }}>
                     <Link href="https://www.yuvraj.site" css={{ color: '$accents8' }}>Contact</Link>
                     <Link href="mailto:official.githubb@gmail.com" css={{ color: '$accents8' }}>Help</Link>
                  </Flex>
                  <Box />
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};