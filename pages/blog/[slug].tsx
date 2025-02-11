import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const postsDirectory = path.join(process.cwd(), "posts");

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.md$/, "") },
  }));
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      meta: data,
      content,
      slug,
    },
  };
};

interface PostPageProps {
  meta: {
    title: string;
    excerpt?: string;
    date: string;
    [key: string]: any;
  };
  content: string;
  slug: string;
}

export default function BlogPost({ meta, content }: PostPageProps) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <h1>{meta.title}</h1>
      {/* ...existing code... */}
      <ReactMarkdown>{content}</ReactMarkdown>
      {/* ...existing code... */}
    </div>
  );
}
