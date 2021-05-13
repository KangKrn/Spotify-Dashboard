import Layout from '../../components/layout'
import styles from '../../styles/USearch.module.scss'

export default function UserSearch(){
    return (
        <Layout>
            <h1>User Search Page</h1>
            <div>Search Bar</div>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.details}>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.playlists}>

                    </div>
                </div>
            </div>
        </Layout>
    )
}