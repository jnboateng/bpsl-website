import { useState } from "react";
import FileUpload from "./FileUpload";

export default function ApplicationForm({ career }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !phone || !email) {
      alert("Please fill all fields");
      return;
    }

    // You can now send this data to your server
    console.log({
      name,
      phone,
      email,
      file,
      career,
    });

    alert("Application submitted successfully!");
    // Optionally clear the form
    setName("");
    setPhone("");
    setEmail("");
    setFile(null);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Your name *
            </label>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-purple-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Phone number *
            </label>
            <input
              type="text"
              placeholder="(xxx) xxxx xxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-purple-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-100 mb-1">
            Email address *
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-purple-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </div>

        <FileUpload file={file} setFile={setFile} />

        <div>
          <button
            type="submit"
            className="w-full bg-purple-100 hover:bg-purple-100 text-white font-semibold py-3 px-4 rounded-md"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
