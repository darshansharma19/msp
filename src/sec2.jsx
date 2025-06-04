import React from "react";
import { ArrowUpRight } from "lucide-react";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";


const books = [
  {
    title: "Tree Wise: The Signing Branches",
    author: "Antoinette Abbamonte",
    description:
      "A children’s book introducing hearing students to Deaf culture through the eyes of a wise, signing tree.",
    image: book1,
    link: "https://www.amazon.com",
  },
  {
    title: "Gratitude, Trust, Intimacy And Love",
    author: "",
    praise: 'Praise: "A beautiful tool for classrooms and families alike"',
    description:
      "A memoir of identity, resilience, and transformation within the Deaf community.",
    image: book2,
    link: "https://www.amazon.com",
  },
];

export default function BookSection() {
  return (
    <section className="bg-[#2C4728] py-8 sm:py-16 px-2 sm:px-6 md:px-12 text-white font-serif">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-8 uppercase tracking-wide">Books</h2>
      <div className="space-y-6 sm:space-y-10">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-[#d9d9d9] rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-black shadow-md"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-w-xs md:w-56 h-auto rounded-2xl shadow-md object-cover"
            />
            <div className="flex-1">
              {book.author && (
                <p className="text-xs text-gray-500 mb-1">By {book.author}</p>
              )}
              {book.praise && (
                <p className="text-xs text-gray-400 italic mb-2">{book.praise}</p>
              )}
              <h3 className="text-2xl font-bold mb-3 leading-tight">{book.title}</h3>
              <p className="mb-6 text-sm font-semibold">{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2C4728] text-white px-5 py-2 rounded-full hover:bg-[#421B03] transition-colors font-semibold"
              >
                Buy on Amazon
                <ArrowUpRight className="h-5 w-5 text-[#F2BA35]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
