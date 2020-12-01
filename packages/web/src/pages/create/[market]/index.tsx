import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from '../../../fixtures/_pages/Tokenization/AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2em;
`

const ResponsiveContainer = styled(Container)`
  display: flex;
  flex-grow: 1;

  @media (min-width: 1024px) {
    width: 690px;
  }
`

const AuthenticateNewAsset = (_: Props) => {
  const { market } = useRouter().query as { market: string }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2>Create an Asset</H2>
        <span>Create an asset or authenticate an existing pool.</span>
      </Headline>
      <ResponsiveContainer style={{ flexGrow: 1 }}>
        <AuthForm market={market} />
      </ResponsiveContainer>
      <Footer />
    </div>
  )
}

export default AuthenticateNewAsset