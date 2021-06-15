import {server} from '../../../config'
import Link from "next/link"

const article = ({article}) => {
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />

            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
            paths,
            fallback: false 
        }
}

// 2. use getServerSideProps to get the id
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// 3. combinaison of getStaticProps + getStaticPaths
//    to dynamically generate the paths with the data
//    data fetched at build time -> faster solution
//    even if we set the limit to 6 articles, if we go to /article/10
//    it'll display the 10th article's data
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`) // generate the path for all posts

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
//     return {
//             paths, // must be equal to {params: {id: '1', id: '2'}}
//             fallback: false  // if we go to something that doesn't exist in the data, it's gonna return a 404 page
//         }
// }

export default article
