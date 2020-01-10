const commentInitialState=[]
const commentsReducer=(state = commentInitialState, action)=>{
    switch(action.type){
        case 'SET_COMMENTS':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default commentsReducer