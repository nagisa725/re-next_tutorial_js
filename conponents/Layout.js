import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";

const name ="ちいかわ 友の会"
export const siteTitle = "Next.js ちいかわ友の会"

// 自動補完機能 nfe タブ
function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/sample/profile.png" className={utilStyles.borderCircle} />
                <h1 className={utilStyles.headingXl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;