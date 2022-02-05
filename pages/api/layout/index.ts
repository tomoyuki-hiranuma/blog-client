import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  url: string;
}

const data: Data[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/__N_u_m_a'
  },
  {
    name: 'Github',
    url: 'https://github.com/tomoyuki-hiranuma'
  },
  {
    name: 'About Me',
    url: 'https://numa-web.netlify.app/'
  },
]

export default (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json(data)
}