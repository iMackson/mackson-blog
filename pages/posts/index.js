import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - it makes building fullstack React applications a breeze and ships with built-in SSR",
    date: "2023-02-13",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - it makes building fullstack React applications a breeze and ships with built-in SSR",
    date: "2023-02-13",
  },

  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - it makes building fullstack React applications a breeze and ships with built-in SSR",
    date: "2023-02-13",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - it makes building fullstack React applications a breeze and ships with built-in SSR",
    date: "2023-02-13",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
