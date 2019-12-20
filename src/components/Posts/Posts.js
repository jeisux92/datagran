import React from "react"
import classes from "./Posts.module.scss";
const Posts = (props) => (
    <>
        <h1>Posts</h1>
        <div className={classes.ContainerTable}>
            <table className={classes.PostsTable}>
                <thead>
                    <tr>
                        <th>user id</th>
                        <th>id</th>
                        <th>post</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.posts.map(el => (
                            <tr key={el.id}>
                                <td onClick={() => props.onClick(el.userId)}>{el.userId}</td>
                                <td>{el.id}</td>
                                <td>{el.post}</td>
                                <td>{el.title}</td>
                                <td>{el.body}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
)


export default Posts;