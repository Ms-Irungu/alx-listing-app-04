import { LayoutProps } from '@/interfaces';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children}) => {
    return (
        <div className="flex flex-col h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
} 

export default Layout;