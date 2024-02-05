import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import AuthContextProvider from './contexts/AuthContextProvider.jsx'
const theme = extendTheme({
    breakpoints: {
      base: "0em", //0px
      sm: "30em", //480px
      md: "48em", //768px
      lg: "62em", //992px
      xl: "80em", //1280px
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </ChakraProvider>
    </React.StrictMode>  
)
