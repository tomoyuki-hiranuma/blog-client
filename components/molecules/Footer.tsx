import React, { VFC } from 'react'
import { css } from '@emotion/react'
import { Flex, VStack, Spacer } from '@chakra-ui/react'
import { CopyRight } from '../atoms/layout/CopyRight'
import { FooterLink } from '../atoms/layout/FooterLink'

const footer = css`
  height: 137px;
  background-color: #60869C;
`

type Data = {
  name: string;
  url: string;
}

interface Props {
  data: Data[]
}

export const Footer: VFC<Props> = ({ data }) => {
  return(
    <>
      <footer css={footer}>
        <Flex px={'32'} pt={'4'}>
          <Spacer />
          <VStack spacing={`0`}>
            {data.map((link) => (
              <FooterLink
                key={link.name}
                name={link.name}
                url={link.url}
            />
            ))}
            <CopyRight />
          </VStack>
        </Flex>
      </footer>
    </>
  )
}