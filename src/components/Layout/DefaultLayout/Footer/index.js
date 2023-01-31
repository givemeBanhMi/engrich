import sytles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo2 from '~/images/logo2.png';
import facebook from '~/images/facebook.png';
import instagram from '~/images/instagram.png';
import tiktok from '~/images/tiktok.png';

const cx = classNames.bind(sytles);

function Footer() {
    return <footer className={cx('footer')}>
        <div className={cx('logo2')}>
            <img src={logo2} alt="Engrich2"></img>
            <h1 className={cx('contact')}>1900 633 028
                Customercare@enrich.vn
                Mon - Sun: 09:30 ~ 21:30</h1>
        </div>
        <div className={cx('footer-content')}>

        </div>
        <div className={cx('copyright')}>
            <p>© 2021 Engrich. All rights reserved.</p>
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