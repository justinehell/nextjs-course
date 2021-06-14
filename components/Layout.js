import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.modules.css'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header>
                        {children}
                    </Header>
                </main>
            </div>
        </>
    )
}

export default Layout