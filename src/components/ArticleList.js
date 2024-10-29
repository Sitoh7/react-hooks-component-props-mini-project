import React from "react"
import Article from "./Article"
function ArticleList({posts}){
    
    return(
        <main>
            {posts.map(i=><Article key={i.id} title={i.title} preview={i.preview} date={i.date}/>)}

        </main>
    )
}
export default ArticleList