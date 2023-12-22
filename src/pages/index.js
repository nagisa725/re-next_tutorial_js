import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '../../conponents/Layout'
import utilStyles from "@/styles/utils.module.css";

import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          この場所はちいかわ好きによるちいかわ好きのためのちいかわ好きが集うサイトです。/好きな言葉はちいかわ。
        </p>
      </section>

      <section>
        <h2>📝【絶対】サイト拡散希望❗広告収入❗❗❗【拡散】</h2>
        <div>
          <article>
            <Link href="">
              <img src='/sample/ちいかわ　img.jpeg'/>
            </Link>
            <Link href="">
              ちいかわを知らない無知な貴方はこちらへ
            </Link>
            <br />
            <small>
              February 23, 2024
            </small>
          </article>
        </div>
      </section>
    </Layout>
  
  );
}
