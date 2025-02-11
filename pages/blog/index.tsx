import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "posts");

interface Post {
  slug: string;
  title: string;
  [key: string]: any;
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
  return { props: { posts } };
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div>
      {/* ...existing layout code... */}
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* ...existing layout code... */}
    </div>
  );
}
