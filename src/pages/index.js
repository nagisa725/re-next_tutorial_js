import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '../../conponents/Layout'

import utilStyles from "@/styles/utils.module.css";
import Link from 'next/link'
import { getPostsData } from '../../lib/post';

//SSGの場合 プリレンダリング手法の一つ(外部からデータを持ってくる、ドキュメントやヘルプページであれば必要ない)
export async function getStaticProps(){
  //getStaticProps ページをレンダリングするために必要なデータを取得する際に使用される
  const allPostsData = getPostsData(); //id,title,date,thumbnail がallPostsDataに格納
  console.log(allPostsData)
  // ↓ビルドしたときにexport default function Home() にallPostsDataを一度だけ渡すためreturnする
  
  return {
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          この場所はちいかわ好きによるちいかわ好きのためのちいかわ好きが集うサイトです。/好きな言葉はちいかわ。
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝【絶対】サイト拡散希望❗広告収入❗❗❗【拡散】</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) =>(
          <article>
          <Link href="">
            <img src='/sample/ちいかわ　img.jpeg'
            className={styles.thumbnailImage}/>
          </Link>
          <Link href="" className={utilStyles.boldText}>
            ちいかわを知らない無知な貴方はこちらへ
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            February 23, 2024
          </small>
        </article>
        ))}
        </div>
      </section>
    </Layout>
  );
}
