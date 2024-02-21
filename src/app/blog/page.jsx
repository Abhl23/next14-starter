import PostCard from "@components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!response.ok) {
//     throw new Error("Something went wrong!");
//   }

//   return response.json();
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard post={post} key={post.id} />
        </div>
      ))}

      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  );
};

export default BlogPage;
