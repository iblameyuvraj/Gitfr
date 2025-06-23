import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

export const Nav = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               Gitfr
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: { pe: 'none' },
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="ACME features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="auto_readme_scaling"
                        showFullDescription
                        description="Automatically adapts your README based on your project size and structure—from tiny scripts to large repos."
                        icon={icons.scale}
                     >
                        Auto README Scaling
                     </Dropdown.Item>

                     <Dropdown.Item
                        key="usage_insights"
                        showFullDescription
                        description="Track how your README performs with real-time analytics like views, clones, and engagement."
                        icon={icons.activity}
                     >
                        Usage Insights
                     </Dropdown.Item>

                     <Dropdown.Item
                        key="production_ready_output"
                        showFullDescription
                        description="Generates production-quality README files used by top-tier projects. No formatting needed."
                        icon={icons.flash}
                     >
                        Production Grade Output
                     </Dropdown.Item>

                     <Dropdown.Item
                        key="high_availability"
                        showFullDescription
                        description="Gitfr runs 24/7 with high uptime guarantees—your README is always accessible and up-to-date."
                        icon={icons.server}
                     >
                        +99% Uptime
                     </Dropdown.Item>

                     <Dropdown.Item
                        key="priority_support"
                        showFullDescription
                        description="Get help whenever needed with our expert support team ready to assist you around the clock."
                        icon={icons.user}
                     >
                        Priority Support
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive href="#">
                  Customers
               </Navbar.Link>
               <Navbar.Link href="#">Pricing</Navbar.Link>
               <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}

            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>

            <ModalLogin />


            <Navbar.Item>
               <Button auto flat href="/signup">
                  Start free trial
               </Button>
            </Navbar.Item>


            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
