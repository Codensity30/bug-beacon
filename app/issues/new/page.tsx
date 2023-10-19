"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const page = () => {
  return (
    <div className="p-3 md:p-14">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full max-w-xl"
      />
      <SimpleMDE className="mt-7 max-w-xl" placeholder="Description" />
      <button className="btn btn-primary w-48 normal-case">
        Submit New Issue
      </button>
    </div>
  );
};

export default page;
