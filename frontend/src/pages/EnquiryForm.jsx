import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const EnquiryForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")  
    const [city, setCity] = useState("")
    const [comment, setComment] = useState("")

    const sumbmitHandler =  (e) => {
       e.preventDefault();

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.target,
  import.meta.env.VITE_EMAILJS_USER_ID
).then((result) => {
  console.log(result.text);
  alert("Email sent successfully!");
}).catch((error) => {
  console.log(error.text);
  alert("Failed to send email.");
});


  e.target.reset();

        // Here you can handle the form submission, e.g., send data to an API
        console.log({
            name,
            email,
            phone,
            city,
            comment
        })

        // Reset form fields
        setName("")
        setEmail("")
        setPhone("") 
        setCity("")
        setComment("")
    }


  return (
    <div className="flex justify-center items-center py-16 px-6 bg-zinc-950 w-full min-h-[70vh]">
        <div className="w-full max-w-2xl bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-zinc-800">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Send us an Enquiry</h2>
                <p className="text-zinc-400">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <form action="" 
            onSubmit={(e)=>{
            sumbmitHandler(e)
            }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-zinc-400 mb-2">Name</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name='name'
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-400 mb-2">Email</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            name='email'
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className='block text-sm font-semibold text-zinc-400 mb-2'>Phone</label>
                        <input  
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel" 
                            name='phone'
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-zinc-400 mb-2'>City</label>
                        <input 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            name='city'
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="Mumbai"
                            required
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <label className='block text-sm font-semibold text-zinc-400 mb-2'>Requirements / Comment</label>
                    <textarea 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                        name='comment'
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button  
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-semibold text-lg py-4 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    Submit Enquiry
                </button>
            </form>
        </div>
    </div>
  )
}

export default EnquiryForm