import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function PostShow(props){
    console.log(props)
    return(
        <div>
            {
                props.user && (
                    <div>
                        <h2>USER NAME:{props.user.name}</h2>
                    </div>
                )
            }
            <h2>TITLE : {props.post.title}</h2>
            <h3>BODY : {props.post.body}</h3>
            <hr/>
            <ul>
            <h2>COMMENTS</h2>
                {
                    props.comments.map(comment=>{
                        return<li key={comment.id}>{comment.body}</li>
                    })
                }
            </ul>
            <Link to={`/users/${props.user.id}`}>More posts of author:{props.user.name}</Link><hr/>
            <Link to="/Posts">Back to Posts</Link>
        </div>
    )
}

const mapStateToProps=(state, props) => {
    const id=props.match.params.id
     const post=state.posts.find(post=>post.id === id)
    return {
        user:state.users.find(user => user.id === post.userId),
        post,
        comments:state.comments.filter(comment => comment.postId === id)
    }
}

export default connect(mapStateToProps)(PostShow)