import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import { client } from './apollo'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import registerServiceWorker from './registerServiceWorker'
import './Theme/font.css'
import { Provider } from 'unstated'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <Provider>
                <GlobalStyle />
                <Routes />
            </Provider>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
