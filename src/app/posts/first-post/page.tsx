import Layout from "@/components/Layout"
import Link from "next/link"

export default function FirstPost() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Postingan Pertama</h1>
      <p className="mb-4">Ini adalah konten dari postingan pertama.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">← Kembali ke Blog</Link>
    </Layout>
    
  )
}
