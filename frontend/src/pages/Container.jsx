import React, { useState } from "react"
import { useContainer } from "../context/ContainerContext";
import { Link } from "react-router-dom";

const Container = () => {
  const {uploadContainer} = useContainer();
  const [name, setName] = useState("")
  const [imageFile, setImageFile] = useState(null);
  const [link, setLink] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !imageFile || !link) {
      return alert("Please fill all fields");
    }

    const formData = new FormData();
    formData.append('name', name);  
    formData.append('image', imageFile);
    formData.append('link', link);

    await uploadContainer(formData);

    setName("")
    setImageFile(null)
    setLink("")
  }

  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center px-6 py-20 relative">
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </div>
            <span className="text-zinc-400 hover:text-white font-medium hidden sm:block">Back to Site</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl mt-10">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Upload Container</h2>
            <p className="text-zinc-400 text-sm">Add a new category container to the homepage</p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Container Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="e.g. Iron Doors" 
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Link Destination</label>
            <select
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            >
              <option value="" className="text-zinc-500">Select Link</option>
              <option value="/iron-doors">Iron Door</option>
              <option value="/iron-windows">Iron Window</option>
              <option value="/iron-stairs">Iron Stair</option>
              <option value="/iron-shades">Iron Shade</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Container Background Image</label>
            <div className="relative border-2 border-dashed border-zinc-700 rounded-xl px-4 py-6 text-center hover:border-blue-500 hover:bg-blue-500/5 transition-all">
              <input 
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="pointer-events-none">
                {imageFile ? (
                   <span className="text-blue-400 font-medium truncate block px-4">{imageFile.name}</span>
                ) : (
                  <>
                    <svg className="mx-auto h-8 w-8 text-zinc-500 mb-2" stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className="text-zinc-400 text-sm">Click or drag image to upload</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Upload Container
          </button>
          
          <div className="mt-4 text-center">
            <Link to="/upload-product" className="text-zinc-500 hover:text-white text-sm transition-colors">
              &larr; Go to Product Upload
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Container