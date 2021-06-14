import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 classname={headerStyles.title}>
                <span>WebDev</span> Newz
            </h1>
            <p className={headerStyles.description}>Keep up to date with latest web dev news</p>
        </div>
    )
}

export default Header