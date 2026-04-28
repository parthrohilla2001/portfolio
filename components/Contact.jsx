import user from '../data/user'

export default function Contact(){
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="text-slate-700">I&apos;m open to new opportunities and collaborations. Feel free to reach out — I&apos;ll get back as soon as possible.</p>
          <ul className="mt-4 text-sm text-slate-600 space-y-2">
            <li><strong>Email:</strong> <a href={`mailto:${user.email}`} className="text-brand-500 hover:underline">{user.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${user.phone}`} className="text-brand-500 hover:underline">{user.phone}</a></li>
            <li><strong>Location:</strong> {user.location}</li>
            <li><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">parth-rohilla</a></li>
            <li><strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">parthrohilla</a></li>
          </ul>
        </div>
        <form className="p-6 bg-white rounded-2xl shadow space-y-4">
          <input placeholder="Your name" className="w-full px-4 py-3 border rounded-md" />
          <input placeholder="Email" className="w-full px-4 py-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full px-4 py-3 border rounded-md h-28"></textarea>
          <div>
            <button type="button" className="w-full sm:w-auto bg-brand-500 text-white px-5 py-3 rounded-lg hover:opacity-95">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
