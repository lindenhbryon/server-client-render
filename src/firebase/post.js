import { firestore } from './firebaseConfig';
import {createPostError, createPostSuccess, getPostsSuccess} from '../actions/posts';
export const createNewPost = (data) => {
    return dispatch => {
        firestore.collection("posts").doc().set({
            title: data.title,
            content: data.content,
            date: new Date()
        })
        .then(function() {
            dispatch(createPostSuccess({
                success: true,
                message: "Post added successfully."
            }));
        })
        .catch(function(error) {
            dispatch(createPostError());
        });
        
    }
}
export const getPosts = () => {
    return dispatch => {
        firestore.collection("posts").doc().get()
        .then(function(results) {
            dispatch(getPostsSuccess({
                success: true,
                posts: results
            }));
        })
        .catch(function(error) {
            dispatch(getPostsSuccess({
                success: false,
                posts: []
            }));
        });
        
    }
}