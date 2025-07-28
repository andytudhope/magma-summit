"use client";

import Image from "next/image";
import { useState } from "react";

const applicationLink = "https://magma.borderless.africa/";

const faqs = [
  {
    question: "Who qualifies to join?",
    answer: (
      <>
        <ul className="list-disc pl-6 mb-4">
          <li>Founders and developers already building African products (built here, or built for Africa, or to connect Africa to the world).</li>
          <li>
            Web2 founders bridging into Web3.
          </li>
          <li>Global contributors and companies interested in Africa.</li>
        </ul>
        <p className="italic">
          Magma founders and builders are automatically accepted.
        </p>
      </>
    )
  },
  {
    question: "Does it cost to participate?",
    answer:
      "No direct cost. All participants are expected to cover their own travel and accommodation while in Accra.",
  },
  {
    question: "Where is the venue?",
    answer: "Central Accra. Exact address sent to confirmed participants.",
  },
  {
    question: "Can I volunteer?",
    answer: (
      <>
        Yes! Please fill this <a href={applicationLink} className="text-red-600 underline">brief form</a>.
      </>
    ),
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans relative overflow-visible z-0">
    {/* Hero Section */}
    <section className="relative overflow-visible bg-white py-24 px-4 sm:px-6 text-center z-10">
      {/* Black star background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="star-mask">
      <rect width="100%" height="100%" fill="black" />
      <path
        d="M50 -11 L63 27 L108 27 L72 60 L85 107 L50 79 L15 107 L28 60 L-8 27 L37 27 Z"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </mask>
          </defs>
          <rect width="100%" height="100%" fill="black" mask="url(#star-mask)" />
        </svg>
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 opacity-4 pointer-events-none z-10">
        <Image
          src="/nyame-dua.svg"
          alt="Nyame Due - God's tree and presence"
          fill
          unoptimized
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%"
          }}
        />
      </div>

      {/* Text Content */}
      <div className="max-w-[1200px] mx-auto my-40 z-20 relative">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold relative">
          Magma Builder Summit
        </h1>
        <h2 className="mt-4 text-2xl">1 - 3 September 2025<br />Accra, Ghana</h2>
        <p className="mt-6 max-w-2xl mx-auto text-md">
          The best founders and builders gathering to create what Africa needs next. 
        </p>
        <a
          href={applicationLink}
          className="z-20 mt-8 inline-block border border-red-600 rounded-md px-6 py-2 bg-red-600 text-white hover:text-black hover:bg-white transition"
        >
          Apply to Join
        </a>
      </div>
    </section>

      {/* Three Pillars */}
      <section className="bg-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              Three Pillars            
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 border-2 border-solid rounded-md"
              style={{
                borderImage: "linear-gradient(to right, #facc15, #16a34a)",
                borderImageSlice: 1,
              }}>
              <Image src="/nserewa.png" alt="Nserewa - Cowries, Seedi, Wealth" width={32} height={32} className="absolute left-20 md:left-24 top-7" unoptimized />
              <h3 className="font-headline text-xl font-bold my-2 mb-6">Stablecoins</h3>
              <p>
                Unlocking Africa's Financial Future. Below the surface of how USD and local currency stablecoins are spreading like wildfire across Africa.
              </p>
            </div>
            <div className="relative p-6 border-2 border-solid rounded-md"
              style={{
                borderImage: "linear-gradient(to right, #16a34a, #facc15)",
                borderImageSlice: 1,
              }}>
              <Image src="/nyansapo.png" alt="Nyansapo - Wisdom Knot" width={32} height={32} className="absolute left-18 md:left-20 top-7" unoptimized />
              <h3 className="font-headline text-xl font-bold my-2 mb-6">Crypto Natives</h3>
              <p>
                From emerging worldviews to products that are moving us closer to new paradigm societies.
              </p>
            </div>
            <div className="relative p-6 border-2 border-solid rounded-md"
              style={{
                borderImage: "linear-gradient(to right, #facc15, #16a34a)",
                borderImageSlice: 1,
              }}>
              <Image src="/uac-nkanea.png" alt="UAC Nkanea - technological advancement" width={32} height={32} className="absolute left-12 md:left-15 top-7" unoptimized />
              <h3 className="font-headline text-xl font-bold my-2 mb-6">Research Frontiers</h3>
              <p>
                The big visions and deep research that go beyond solving immediate needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-white py-8 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="font-headline text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              Why We're Doing a Summit
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <div className="w-full sm:w-3/4">
              <p className="max-w-3xl mx-auto sm:mx-0">
                The purpose of this summit is to accelerate collaboration amongst builders and forge new partnerships to drive tangible value. It's designed to foster real talk and deep insights into the evolving landscape. We aim to foster high-trust relationships in Africa, and between Africa and the world. Ultimately, we want to elevate our collective global position and drive progress for startups, research, and the entire ecosystem.
              </p>
            </div>
            <div className="w-full sm:w-1/4 flex justify-center">
              <Image
                src="/sankofa.svg"
                alt="Sankofa - A symbol of the wisdom of learning from the past to build for the future"
                width={96}
                height={96}
                className="sm:mt-1"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who's Joining */}
      <section className="bg-white py-8 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="font-headline text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              Who's Joining
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <div className="w-full sm:w-3/4">
              <p className="max-w-3xl mx-auto sm:mx-0">
                This invite-only summit convenes magma founders and builders (currently 75 strong driving 40+ leading startups across Africa); African leaders at the forefront of technology, community, and social empowerment; and Global founders, researchers, and VCs. It is a unique mix of people uniquely positioned to create what Africa, and the world, needs next.
              </p>
            </div>
            <div className="w-full sm:w-1/4 flex justify-center">
              <Image
                src="/nkonsonkonson.svg"
                alt="Nkonsonkonson - Gathering, Community"
                width={96}
                height={96}
                className="sm:mt-1"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}

      <section className="bg-white py-8 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="font-headline text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              What to Expect: The Magma Vibe, Elevated
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <div className="w-full sm:w-3/4">
              <p className="max-w-3xl mx-auto sm:mx-0">
                This isn't a passive event. It's an intimate, highly engaging experience built on core magma values. It is collegial, high-trust, and deeply collaborative. Prepare for three days of lean-in discussions, deep explorations, and meaningful connections where you'll be actively giving and receiving.
              </p>
            </div>
            <div className="w-full sm:w-1/4 flex justify-center">
              <Image
                src="/adinkrahene.svg"
                alt="Adinkrahene - Authority, Leadership, Charisma"
                width={96}
                height={96}
                className="sm:mt-1"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="font-headline text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              Partners & Supporters            
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="https://lavavc.io"
              className="flex items-center justify-center md:aspect-square p-8 md:p-4 hover:bg-[radial-gradient(ellipse_at_30%_20%,#fef9c3_0%,#dcfce7_70%)]"
            >
              <div className="w-24 h-12 flex items-center justify-center">
                <Image
                  src="/lava.jpeg"
                  alt="LAVA"
                  width={96}
                  height={96}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </a>
            <a
              href="https://meltwater.org/"
              className="flex items-center justify-center md:aspect-square p-8 md:p-4 hover:bg-[radial-gradient(ellipse_at_30%_20%,#fef9c3_0%,#dcfce7_70%)]"
            >
              <div className="w-24 h-12 flex items-center justify-center">
                <Image
                  src="/mest.png"
                  alt="Mest"
                  width={96}
                  height={96}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </a>
            <a
              href="https://ens.domains"
              className="flex items-center justify-center md:aspect-square p-8 md:p-4 hover:bg-[radial-gradient(ellipse_at_30%_20%,#fef9c3_0%,#dcfce7_70%)]"
            >
              <div className="w-24 h-12 flex items-center justify-center">
                <Image
                  src="/ens.svg"
                  alt="ENS DAO"
                  width={96}
                  height={96}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-16 px-4 sm:px-6" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative text-center mb-10">
            <h2 className="font-headline text-3xl font-semibold relative inline-block z-10 bg-white px-4">
              FAQ            
            </h2>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-300">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-left py-4 font-bold flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transition-transform duration-200 ${activeIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="py-6 text-md">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="bg-white py-16 px-4 sm:px-6 text-center" id="apply">
        <div className="max-w-[1200px] mx-auto">
          <a
            href={applicationLink}
            className="z-0 mt-8 inline-block border border-red-600 rounded-md text-white px-6 py-2 bg-red-600 hover:text-black hover:bg-white transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
