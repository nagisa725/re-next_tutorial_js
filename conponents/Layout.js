import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

const name ="ちいかわ 友の会"
export const siteTitle = "Next.js ちいかわ友の会"

// 自動補完機能 nfe タブ
function Layout({children,home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <img 
                    src="/sample/profile.png" 
                    className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} 
                    />
                    <h1 className={utilStyles.headingXl}>{name}</h1>
                </>
                ):(
                <>
                    <img 
                    src="/sample/profile.png" 
                    className={`${utilStyles.borderCircle}`} 
                    />
                    <h1 className={utilStyles.headingXl}>{name}</h1>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home &&(
                <div>
                    <Link href="/">←ホームへ戻る</Link>
                    {/* ↑もしホームでなければこれが表示され押すとindexページに戻る */}
                </div>

            )}
            {/* !home && で'もしhomeでなければ〜、という意味になる' */}
        </div>
    );
}

export default Layout;
