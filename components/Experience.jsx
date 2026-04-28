import user from '../data/user'

export default function Experience() {
  return (
    <section id="experience" className="mt-16">
      <h2 className="text-2xl font-semibold">Professional Experience</h2>
      <div className="mt-6 space-y-8">
        {user.experience.map((exp) => (
          <div key={exp.company} className="p-6 bg-white rounded-2xl shadow">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-brand-500 font-medium">{exp.company} — {exp.location}</p>
              </div>
              <span className="text-sm text-slate-500 font-medium whitespace-nowrap">{exp.period}</span>
            </div>

            {/* Highlights */}
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-500 mt-1 shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Key Projects */}
            {exp.keyProjects && exp.keyProjects.length > 0 && (
              <div className="mt-5 border-t border-slate-100 pt-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Projects</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.keyProjects.map((proj) => (
                    <div key={proj.title} className="p-4 bg-slate-50 rounded-xl">
                      <h5 className="font-semibold text-sm">{proj.title}</h5>
                      <ul className="mt-2 space-y-1 text-xs text-slate-600">
                        {proj.bullets.map((b, i) => (
                          <li key={i} className="flex gap-1.5">
                            <span className="text-brand-500 mt-0.5 shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
