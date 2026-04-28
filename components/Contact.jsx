export default function Contact(){
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="text-slate-700">I'm available for freelance or full-time opportunities. Send a message and I'll get back within 48 hours.</p>
          <ul className="mt-4 text-sm text-slate-600 space-y-2">
            <li><strong>Email:</strong> hello@yourdomain.com</li>
            <li><strong>Location:</strong> Remote / Worldwide</li>
          </ul>
        </div>
        <form className="p-6 bg-white rounded-2xl shadow space-y-4">
          <input placeholder="Your name" className="w-full px-4 py-3 border rounded-md" />
          <input placeholder="Email" className="w-full px-4 py-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full px-4 py-3 border rounded-md h-28"></textarea>
          <div>
            <button type="button" className="w-full sm:w-auto bg-brand-500 text-white px-5 py-3 rounded-lg">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
