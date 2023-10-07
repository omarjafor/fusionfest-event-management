
const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-lime-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About US</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Omar Jafor</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;