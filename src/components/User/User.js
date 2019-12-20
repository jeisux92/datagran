import React from "react"
import classes from "./User.module.scss";

const User = (props) => (
    <>
        < h1 > Posts by user</h1>
        <div className={classes.ContainerTable}>
            <table className={classes.SecondTable}>
                <thead>
                    <tr>
                        <th>user id</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.postsByUser.map(el => (
                            <tr key={el.id}>
                                <td>{el.userId}</td>
                                <td onClick={() => props.onClick(el.id)}>{el.id}</td>
                                <td>{el.title}</td>

                                <td>{el.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
)
export default User;