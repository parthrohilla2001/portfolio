import user from '../data/user'

const Tech = ({ name }) => <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">{name}</span>

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {user.projects.map((p) => (
          <article key={p.title} className="p-6 bg-white rounded-2xl shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tech.map((t) => <Tech key={t} name={t} />)}
                </div>
              </div>
              <div className="text-sm self-start sm:self-center">
                <a href={p.link} className="inline-block mt-2 sm:mt-0 text-brand-500 hover:underline">Live</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
