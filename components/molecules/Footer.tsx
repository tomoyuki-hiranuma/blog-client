import React, { VFC } from 'react'
import { css } from '@emotion/react'
import { Flex, VStack, Spacer } from '@chakra-ui/react'
import { CopyRight } from '../atoms/layout/CopyRight'
import { FooterLink } from '../atoms/layout/FooterLink'

const footer = css`
  height: 137px;
  background-color: #60869C;
`

export const Footer: VFC = () => {
  return(
    <>
      <footer css={footer}>
        <Flex px={'32'} pt={'4'}>
          <Spacer />
          <VStack spacing={`0`}>
            <FooterLink
              name='Twitter'
              url='https://twitter.com/__N_u_m_a'
            />
            <FooterLink
              name='Github'
              url='https://github.com/tomoyuki-hiranuma'
            />
            <FooterLink
              name='About Me'
              url='https://numa-web.netlify.app/'
            />
            <CopyRight />
          </VStack>
        </Flex>
      </footer>
    </>
  )
}