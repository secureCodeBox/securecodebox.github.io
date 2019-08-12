import React from "react" 
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""  />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <Layout>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
            <User 
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="You know who I am"
            />
            <User
                username="Max Mustermann"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm famous in Germany"
            />
        </Layout>
    </Container>
)