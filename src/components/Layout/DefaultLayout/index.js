import Header from './Header';
import Footer from './Footer';

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <body>
                {children}
            </body>
            <Footer />
        </div>
    );
}

export default DefaultLayout;