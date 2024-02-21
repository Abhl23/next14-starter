import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );

//   if (!response.ok) {
//     throw new Error("Something went wrong!");
//   }

//   return response.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19781192/pexels-photo-19781192/free-photo-of-you-called-for-a-ride.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="blog-image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/19781192/pexels-photo-19781192/free-photo-of-you-called-for-a-ride.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar-image"
            className={styles.avatar}
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>20.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. */}
          {post.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
