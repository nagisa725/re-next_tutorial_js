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