import * as React from 'react'
import styled from 'styled-components'
import { Empty } from 'antd'
import SvgCamp from 'src/components/atoms/Svgs/tsx/Camp'

interface Props {
  className?: string
}

const Placeholder = styled(Empty)`
  margin: 0;
  padding: 3rem;
  border: 2px dashed lightgray;
  border-radius: 6px;
  small {
    color: lightgray;
  }
`

export const ConnectedApps = ({ className }: Props) => (
  <div className={className}>
    <p>Connected Apps</p>
    <Placeholder image={<SvgCamp width="100%" />} description="This feature is under construction"></Placeholder>
  </div>
)
