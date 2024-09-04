import { Inter } from "next/font/google";
import { PostsProvider } from "@/contexts/postsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Blog with Blogger API",
  description: "Blog Portfolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PostsProvider>
        <body className={inter.className}>{children}</body>
      </PostsProvider>
    </html>
  );
}
