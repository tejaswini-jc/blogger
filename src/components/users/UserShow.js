import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserShow(props){
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
            <h3>POSTS WRITTEN BY USER</h3>
                <ul>
                    {
                        props.posts.map(post=>{
                            return<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
                <Link to="/users">Back to Users</Link>
            </div>
        )
}

const mapStateToProps=(state, props) => {
    const id=props.match.params.id
    return{
        user:state.users.find(user => user.id === parseInt(id)),
        posts:state.posts.filter(post => post.userId === parseInt(id))
    }
}
export default connect(mapStateToProps)(UserShow)