import Layout from "@/components/Layout"
import Link from "next/link"

export default function SecondPost() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Postingan Kedua</h1>
      <p className="mb-4">Ini adalah konten dari postingan Kedua.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">← Kembali ke Blog</Link>
    </Layout>
    
  )
}
