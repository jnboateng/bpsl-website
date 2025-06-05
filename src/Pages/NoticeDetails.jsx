import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/About/Hero';
import { dummyNotices } from './Notices'; // Ensure dummyNotices is exported from Notices.jsx
import UndoButton from '../components/UndoButton';

function NoticeDetails() {
  const { id } = useParams(); // 🔑 Get the notice ID from URL params

  const selectedNotice = dummyNotices.find(
    (notice) => String(notice.id) === id
  );

  if (!selectedNotice) {
    return (
      <div className="p-8">
        <h1 className="text-3xl md:text-4xl text-red-500 font-semibold">Notice not found.</h1>
        <Link to="/notices" className="text-purple-600 underline mt-4 inline-block">
          Go back to Notices
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Hero text1="Notices" />

      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <>
        <UndoButton />
        <h1 className="text-3xl md:text-3xl font-bold text-purple-200 leading-tight">
          {selectedNotice.title}
        </h1>
        </>
      </div>

      <div className="my-6 px-6 max-w-4xl">
        <img
          src={selectedNotice.image}
          alt={selectedNotice.title}
          className="rounded-xl w-full h-64 object-cover mb-6"
        />
        <p className="text-gray-700 whitespace-pre-wrap">
          {selectedNotice.description}
        </p>

        
      </div>
    </div>
  );
}

export default NoticeDetails;
