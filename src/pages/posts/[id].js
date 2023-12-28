import Layout from "../../../conponents/Layout";
import { getAllPostIds } from "../../../lib/post";

/*getStaticPathsのために使うオブジェクトのパスをpost.jsにてparams,idで取得したので
作ったパスをここでは取り込んでいく↓*/
export async function getStaticPaths(){
    const paths = getAllPostIds()
    //post.jsで作ったgetAllPostIds()をタブ保管で引っ張ってくる=この中にはパスがオブジェクトとして用意されているため
    //↓以上をreturnで返していく！
    return {
        paths,
        fallback: false,
        /*fallback: false,とすることで取ってきているpaths(getAllPostIds())に
        含まれていない他のパスにアクセスをすると404エラーページに遷移する
        ↑ =このパスで設定されたページはSSGされるということ！ */
    }
}

export default function Post() {
    return (
       <Layout>動的ルーティング設定</Layout>
    );
}