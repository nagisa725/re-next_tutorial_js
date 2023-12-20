import Head from "next/head";

const name ="ちいかわ 友の会"
export const siteTitle = "Next.js ちいかわ友の会"

// 自動補完機能 nfe タブ
function Layout({children}) {
    console.log(children)
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <img src="/sample/profile.png" />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;