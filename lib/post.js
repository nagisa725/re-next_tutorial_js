import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(),"posts");

// ↓mdファイルからデータを取り出すための関数
export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);//fs.readdirSync('ファイル名やディレクトリ名のリストが得られる')
    console.log(fileNames);
    const allPostsData = fileNames.map((fileName) =>{
    const id = fileName.replace(/\.md$/,""); //ファイル名(id) replace(/\.md$/,"")は"posts"フォルダ内のファイルを取り出している

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory,fileName);
    const fileContents = fs.readFileSync(fullPath,"utf-8");//fullPathで指定された中身のデータを文字列として認識させ、fileContentsに格納
   
    //投稿用のメタデータを分析解析する
    const matterResult = matter(fileContents);

    //indexページにサムネやタイトルを出力する為にidとデータを返す記述
    return{
        id,
        ...matterResult.data,

        };
    });
    return allPostsData;
}

//getStaticPathsでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    //↑mdファイル内に入った拡張子付き(---.md)のファイルをfileNamesに格納
    return fileNames.map((fileName) => {
    /*↑map関数で一つ一つをfileName変数を準備、返していき、↓params:を指定して更に返していく
        ここのreturnはgetAllPostIds()に対するもの*/
        return{
            params: {
                id:fileName.replace(/\.md$/,""),
            /*↑ここの"id"の意味=動的ルーティングURLファイルを作る際に指定した鉤括弧[id].jsで任意名をつけた、
                パスとして返すにはここに"id"を付ける必要があり、必ず一致させなければいけない
                また、"id"はファイル名に相当する=拡張子を抜く。なのでreplace関数を使用している*/
            }
        }
    })
}
/*内訳内容
    [
        {
            params: {
                id: "ssg-ssr"(任意名のmdファイル)
            }
        }
    ],
    [
        {
            params: {
                id: "next-react"(任意名のmdファイル)
            }
        }
    ]
*/ 