import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import postData from '../../../../helpers/postData.json'



const Leftp = (props) => {
    const data = postData.find(post => post.id === parseInt(props.postID))
    console.log(data)
    return(
        <>
            <div style={{paddingTop:"3em"}}>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <ThumbUpIcon/> Like
                </button>
               
                <span style={{paddingLeft:"7em"}}>{data.likes}</span>
                <br/><br/>
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <CommentIcon/> Comment
                </button>
                <span style={{paddingLeft:"7em"}}>{data.comments}</span>
                <br/><br/>

                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <BookmarkIcon/> Bookmark
                </button>
                <span style={{paddingLeft:"7em"}}>{data.bookmarks}</span>
                <br/><br/>
                
                <button className='btn shadow-none' style={{paddingLeft:"6em"}}>
                    <ShareIcon/> Share
                </button>
                <br />

            </div>
        </>
    )
}

export default Leftp