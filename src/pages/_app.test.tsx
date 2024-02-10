import { render } from '@testing-library/react'
import MyApp from './_app'
import { Router } from 'next/router'

const mockRouter: Partial<Router> = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: async () => true,
  replace: async () => true,
  reload: () => null,
  back: () => null,
  prefetch: async () => undefined,
  beforePopState: () => null,
  events: {
    on: () => null,
    off: () => null,
    emit: () => null
  },
  isFallback: false,
  isReady: true,
  isPreview: false,
  basePath: '',
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en',
  domainLocales: [],
  isLocaleDomain: false
}

describe('MyApp', () => {
  it('renders without crashing', () => {
    const TestComponent = () => <div>Test</div>
    const testPageProps = { testProp: 'test' }

    const { getByText } = render(
      <MyApp
        Component={TestComponent}
        pageProps={testPageProps}
        router={mockRouter as Router}
      />
    )

    expect(getByText('Test')).toBeInTheDocument()
  })
})
