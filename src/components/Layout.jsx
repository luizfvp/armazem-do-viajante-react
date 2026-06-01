import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className="bg-blur"></div>

            <svg id="svgfilters" style={{ width: 0, height: 0, visibility: 'hidden', position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="irregular">
                        <feTurbulence baseFrequency="0.02" id="turbulence-3" numOctaves="3" result="noise" seed="3" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                    </filter>
                </defs>
            </svg>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}