import { CheckCircle } from "lucide-react"; 

export default function FileUpload({file,setFile}) {

  return (
    <div>
      <label className="block text-sm font-medium text-purple-100 mb-1">
        Attach documents *
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border border-dashed border-purple-100 rounded-md bg-purple-50">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-10 w-10 text-purple-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M14 22l10-10 10 10m-10-10v24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex flex-col items-center text-sm text-purple-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-purple-100 hover:text-purple-200 focus-within:outline-none px-4 py-2"
            >
              {file ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-600 font-semibold">
                    {file.name}
                  </span>
                </div>
              ) : (
                <span>Drag and drop files here...</span>
              )}
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <p className="text-xs text-purple-600">
            Combine your cover letter and CV in one PDF, Max size: 5MB
          </p>
        </div>
      </div>
    </div>
  );
}
