import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/About/Hero';
import UndoButton from '../components/UndoButton';
import { getNotice } from "../Api"; 
import { toast } from 'react-toastify';

function NoticeDetails() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setLoading(true);
        const response = await getNotice(id);
        setNotice(response.data);
      } catch (err) {
        setError(err);
        toast.error('Failed to fetch notice details');
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (error || !notice) {
    return (
      <div className="p-8">
        <h1 className="text-3xl md:text-4xl text-red-500 font-semibold">
          {error ? "Error loading notice" : "Notice not found"}
        </h1>
        <Link to="/notices" className="text-purple-100 underline mt-4 inline-block">
          Go back to Notices
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Hero text1="Notices" />

      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12">
        <div className="bg-purple h-8 w-12 mb-2" />
        <>
          <UndoButton />
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 leading-tight">
            {notice.title}
          </h1>
        </>
      </div>

      <div className="my-6 px-6 max-w-4xl">
        {notice.image && (
          <img
            src={notice.image}
            alt={notice.title}
            className="rounded-xl w-full h-64 object-cover mb-6"
          />
        )}
        <p className="text-gray-700 whitespace-pre-wrap">
          {notice.description}
        </p>
      </div>
    </div>
  );
}

export default NoticeDetails;