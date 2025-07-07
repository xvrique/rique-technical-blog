"use client";

import Layout from "@/components/Layout";
import React from "react";
import CustomParticles from "@/components/CustomParticles";
import "@/styles/globals.css";



export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
            <div className="absolute inset-0 bg-black z-0">
              <CustomParticles />
            </div>

        {/* Floating Elements */}
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 animate-pulse blur-2xl opacity-30">
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#00FFFF"
              d="M47.6,-61.3C61.3,-49.6,71.6,-30.2,73.6,-10.1C75.7,9.9,69.6,30,56,43.6C42.3,57.2,21.1,64.2,1.2,62.7C-18.7,61.3,-37.4,51.3,-48.9,37.2C-60.4,23.1,-64.8,4.9,-60.3,-11.9C-55.8,-28.6,-42.4,-43.9,-26.7,-55.3C-11,-66.7,7,-74.2,24.3,-71.5C41.6,-68.9,58.2,-56.3,47.6,-61.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Orb 2 - Bottom Right */}
        <div className="absolute bottom-16 right-20 animate-pulse blur-xl opacity-25">
          <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#00FFFF"
              d="M49.6,-61.2C62.1,-50.9,67.4,-31.3,68.5,-13.6C69.6,4.1,66.6,20.7,57.6,33.5C48.6,46.3,33.6,55.3,18.6,61.8C3.5,68.2,-11.6,72,-25.5,67.2C-39.4,62.4,-52,49.1,-60.5,34.3C-68.9,19.5,-73.2,3.3,-68.7,-10.4C-64.3,-24,-51.1,-35.2,-37.3,-46.7C-23.5,-58.2,-11.8,-70,-0.2,-69.7C11.5,-69.3,23,-56.8,49.6,-61.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>


        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-bold glitch" data-text="Rique is Here">
              Rique is Here
            </h1> 
          </div>


          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Jelajahi masa depan melalui kata-kata. Temukan cerita, insight, dan inspirasi yang akan membawa Anda ke dimensi baru pemikiran.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">Mulai Membaca</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-5xl font-bold glitch" data-text="Fitur Futuristik">
              Fitur Futuristik
            </h2> 
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Pengalaman membaca yang tak terlupakan dengan teknologi terdepan
            </p>
          </div>



          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[...Array(3)].map((_, i) => {
              const feature = [
                {
                  title: "AI-Powered Search",
                  description:
                    "Pencarian artikel dengan teknologi AI untuk hasil yang lebih relevan dan akurat.",
                  icon: (
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  title: "Personalized Feed",
                  description:
                    "Konten yang disesuaikan dengan minat dan preferensi reading Anda.",
                  icon: (
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  ),
                },
                {
                  title: "Smart Analytics",
                  description:
                    "Dashboard analitik canggih untuk memantau performa dan engagement artikel.",
                  icon: (
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  ),
                },
              ][i];
              return (
                <div
                  key={i}
                  className="group relative bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 via-black to-cyan-900 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold glitch text-white mb-6 ">
            Siap Memulai <span className="text-cyan-400" >Perjalanan</span>? 
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pembaca yang telah menemukan inspirasi melalui artikel-artikel berkualitas kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">Daftar Sekarang</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
