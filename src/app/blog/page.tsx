import Layout from "@/components/Layout"
import Link from "next/link"

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Semua Postingan</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/posts/first-post">Postingan Pertama</Link>
        </li>
        <li>
          <Link href="/posts/second-post">Postingan Kedua</Link>
        </li>
      </ul>
    </Layout>
  )
}
