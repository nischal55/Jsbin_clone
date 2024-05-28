import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { ClerkProvider } from '@clerk/clerk-react'

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root')).render(
<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <App />,
</ClerkProvider>
)
