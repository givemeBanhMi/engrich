import sytles from './Header.module.scss';
import classNames from 'classnames/bind';
import avatar from '~/images/avatar1.png';
import logo from '~/images/logotrang.png';
import cart from '~/images/shop-bag1.png';

const cx = classNames.bind(sytles);

function Header() {
    return <header className={cx('header')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={logo} alt="Engrich"></img>
            </div>
            <div className={cx('menu')}>
                <ul>ABOUT US</ul>
                <ul>COLLECTIONS</ul>
                <ul>Collections</ul>
                <ul>GALLERY</ul>
                <ul>SUPPORT</ul>
            </div>
            <div className={cx('userIcon')}>
                <img src={avatar} alt="avatar"></img>
                <img src={cart} alt="cart"></img>
            </div>
        </div>
    </header>

}

export default Header;