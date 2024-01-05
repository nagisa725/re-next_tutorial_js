import Layout from "../../../conponents/Layout";
import { getAllPostIds, getPostData } from "../../../lib/post";

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
    };
};

//ブログページのURLに表示されるmdファイルの名前を元に各ブログ記事リンク先に応じた内容を表示させる作業　
//*これはあくまでURLに含まれたファイル名を取ってくるための式なのでブログのデータ情報全てを引っ張ってくる関数は別にある
export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    //{params}を引数に取る事でparams.id = URLに含まれたファイル名を取得することが出来る=個別のデータを識別し各ブログデータをpostDataに格納できる

    return {
        props:{
            //getStaticPropsにはprops:で返す
            postData,
        }
    };
};

export default function Post({postData}) {
    //console.log(postData.title)
    return (
       <Layout>
        <article>
        {postData.title}
        <br />
        {postData.date}
        <br />
        {postData.blogContentHTML}
        </article>
       </Layout>
    );
}