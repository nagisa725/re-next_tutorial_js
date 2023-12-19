import Head from "next/head";

function Layout() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <header>
                <img src="/sample/profile.png"></img>
            </header>
        </div>
    );
}

export default Layout;
// 自動補完機能 nfe タブ