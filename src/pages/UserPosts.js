import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./UserPosts.module.scss";
import Posts from "../components/Posts/Posts";
import User from "../components/User/User";
import Comments from "../components/Comments/Comments";
import Modal from "../components/Modal/Modal";

const UserPosts = () => {
    useEffect(() => {
        getPosts()
    }, [])
    const [posts, setPosts] = useState([])
    const [postsByUser, setPostsByUser] = useState([])
    const [commentsByPost, setCommentsByPost] = useState([])

    const getPosts = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    };


    const getPostsByUser = (id) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                setPostsByUser(response.data)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    const getCommentsByPost = (id) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                setCommentsByPost(response.data)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }
    let postsUser = null
    if (postsByUser.length) {
        postsUser = (
            <div className={[classes.Container, classes.Right].join(" ")}>
                <User onClick={getCommentsByPost} postsByUser={postsByUser} />
            </div>
        )
    }
    let commmentsPost = null;
    if (commentsByPost.length) {
        commmentsPost = (
            <Modal onClosed={() => setCommentsByPost([])}>
                <Comments commentsByPost={commentsByPost} />
            </Modal>)
    }


    return (
        <div className={classes.Posts}>
            <div className={[classes.Container, classes.Left].join(" ")}>
                <Posts onClick={getPostsByUser} posts={posts} />
            </div>
            {postsUser}
            {commmentsPost}
        </div>
    );
}

export default UserPosts;