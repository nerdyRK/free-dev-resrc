import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    const api = import.meta.env.VITE_API_KEY;
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", api);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Success! Your message has been sent.");
      event.target.reset(); // Reset form
    } else {
      setMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div>
      <p className="mb-4 text-center py-6 text-yellow-300">
        If you did not find any resource in a category that can be useful for
        other developers, you can send a message. I will review and add that.
      </p>
      <div className="max-w-lg mx-auto sm:p-14 p-8 bg-bgd text-white rounded-lg shadow-md">
        <form onSubmit={onSubmit} className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input type="hidden" name="from_name" value="Dev-Site 💻" />

            <input
              type="hidden"
              name="subject"
              value="New Submission from Resource Website"
            ></input>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-300"
            >
              Resource category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Resource Link
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Form
          </button>
        </form>
        {message && (
          <div className="text-center text-sm font-medium">{message}</div>
        )}
      </div>
    </div>
  );
}
