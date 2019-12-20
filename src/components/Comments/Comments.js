import React from "react";
import classes from "./Comments.module.scss"

const Comments = (props) => (
    <>
        <h1 className={classes.Title}>Post comments</h1>
        <div className={classes.ContainerTable}>
            <table className={classes.CommentsTable}>
                <thead>
                    <tr>
                        <th>post id</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.commentsByPost.map(el => (
                            <tr key={el.id}>
                                <td>{el.postId}</td>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
)

export default Comments;