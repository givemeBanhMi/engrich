import sytles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logo2 from '~/images/logo2.png';
import facebook from '~/images/facebook.png';
import instagram from '~/images/instagram.png';
import tiktok from '~/images/tiktok.png';

const cx = classNames.bind(sytles);

function Footer() {
    return <footer className={cx('footer')}>
        <tr className={cx('footer-part1')}>
            <th className={cx('logo2')}>
                <img src={logo2} alt="Engrich2"></img>
                <p>1900 633 028</p>
                <p>Customercare@enrich.vn</p>
                <p>Mon - Sun: 09:30 ~ 21:30</p>
            </th>
            <th className={cx('footer-content')}>
                <div className={cx('footer-content-col-1')}>
                    <h1>COLLECTIONS</h1>
                    <p>Sanctuary 2022</p>
                    <p>Euphoria 2022</p>
                    <p>Bad Habits 2021</p>
                    <p>All Collections</p>
                </div>
                <div className={cx('footer-content-col-2')}>
                    <h1>GALLERY</h1>
                    <p>Photos</p>
                    <p>Newsletter</p>
                </div>
                <div className={cx('footer-content-col-3')}>
                    <h1>ABOUT US</h1>
                    <p>Enrich</p>
                    <p>Store Locator</p>
                    <p>Contact</p>
                    <p>Careers</p>
                </div>
                <div className={cx('footer-content-col-4')}>
                    <h1>SUPPORT</h1>
                    <p>Shipping & Delivery</p>
                    <p>Payment methods</p>
                    <p>Contact</p>
                    <p>Return & refunds</p>
                    <p>Account</p>
                    <p>F.A.Q</p>
                </div>
            </th>
        </tr>
        <div className={cx('copyright')}>
            <h1>© 2021 Engrich. All rights reserved.</h1>
            <p> Privacy Policy</p>
            <p>Terms & Conditions</p>
            <div className={cx('social')}>
                <img src={facebook} alt="facebook"></img>
                <img src={instagram} alt="instagram"></img>
                <img src={tiktok} alt="tiltok"></img>
            </div>
        </div>
    </footer>
}

export default Footer;