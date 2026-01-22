import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDivider } from './SectionDivider';
import { projects } from '../data/projects';

export function ProjectGrid() {
  return (
    <>
      <SectionDivider label="My Projects" />
      
      <section id="projects" className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
          Projects
        </h2>

        <div className="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl"
            >
              <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
              <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
              
              <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="block w-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
                  />
                </span>
                <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                  <span className="flex items-center mb-0 tracking-tight text-neutral-900 dark:text-neutral-100">
                    <span>{project.name}</span>
                    <svg
                      className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                      viewBox="0 0 13 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g stroke="currentColor" strokeWidth="2.4">
                          <polyline
                            className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                            points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                          />
                          <line
                            className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            x1="10.8333333"
                            y1="5.5"
                            x2="0.833333333"
                            y2="5.16666667"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 block truncate">
                    {project.description}
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center w-full py-5">
          <a
            href="/projects"
            className="inline-flex w-auto px-4 py-2 mt-5 duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
          >
            View All Projects
          </a>
        </div>
      </section>
    </>
  );
}
