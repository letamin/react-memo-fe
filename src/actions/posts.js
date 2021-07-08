import * as api from "../api";
import { FETCH_ALL, UPDATE, CREATE, DELETE, LIKE } from "../constants/actionTypes";

//GET ALL POSTS
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        const action = { type: FETCH_ALL, payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}

//CREATE NEW POST
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        const action = { type: CREATE, payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
}

//UPDATE POST
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        const action = { type: UPDATE, payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}

//DELETE POST
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        const action = { type: DELETE, payload: id };
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}

//LIKE POST
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        const action = { type: LIKE, payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}