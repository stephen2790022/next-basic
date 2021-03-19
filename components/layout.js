import { Header } from './header';


export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)
