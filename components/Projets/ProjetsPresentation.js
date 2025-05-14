import Image from "next/image";
import ThemeAwareImage from "../ThemeAwareImage";
import Link from "next/link";

export default function ProjetsPresentation() {
  return (
    <div className="card bg-base-100 shadow-xl p-4 mx-3 xs:mx-10 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-50">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="px-2 w-1/3"><Link href="/projets">Projets</Link></th>
              <th className="px-2 w-1/6">Statut</th>
              <th className="px-2 w-1/6">Lancement</th>
              <th className="px-2 w-1/6">Déploiement</th>
              <th className="px-2 w-1/6">Code source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <ThemeAwareImage
                        lightSrc="/LM-logo-noire.png"
                        darkSrc="/LM-logo2.png"
                        alt="Lucas Millart Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"><Link href="/projets/mon-blog">Mon Blog</Link></div>
                    <div className="text-sm opacity-50">Partage de mes idées et projets</div>
                  </div>
                </div>
              </td>
              <td className="px-2"><span className="badge badge-primary">Actif</span></td>
              <td className="px-2">Mars 2025</td>
              <td className="px-2">
                <Link href="https://lucasmillart.vercel.app" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Voir
                </Link>
              </td>
              <td className="px-2">
                <Link href="https://github.com/LucasMillart/blog" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-2">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src="/Planifeo-logo.png"
                        alt="Planifeo Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"><Link href="projets/planifeo">Planifeo</Link></div>
                    <div className="text-sm opacity-50">Application de planification d&apos;entrainement</div>
                  </div>
                </div>
              </td>
              <td className="px-2"><span className="badge badge-success">Nouveau</span></td>
              <td className="px-2">Fév 2025</td>
              <td className="px-2">
                <Link href="https://planifeo.vercel.app" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Voir
                </Link>
              </td>
              <td className="px-2">
                <Link href="https://github.com/LucasMillart/planifeo" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-2">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src="/Snake.png"
                        alt="Snake Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"><Link href="projets/planifeo">Snake</Link></div>
                    <div className="text-sm opacity-50">Jeux de Snake</div>
                  </div>
                </div>
              </td>
              <td className="px-2"><span className="badge badge-success">Nouveau</span></td>
              <td className="px-2">Avril 2025</td>
              <td className="px-2">
                <Link href="https://snake-game.vercel.app" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Voir
                </Link>
              </td>
              <td className="px-2">
                <Link href="https://github.com/LucasMillart/snake-game" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-2">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src="/grille.png"
                        alt="Grille Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"><Link href="projets/100-heures">100 heures de travail</Link></div>
                    <div className="text-sm opacity-50">je tracke mes heures.</div>
                  </div>
                </div>
              </td>
              <td className="px-2"><span className="badge badge-success">Nouveau</span></td>
              <td className="px-2">Avril 2025</td>
              <td className="px-2">
                <Link href="projets/100-heures" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Voir
                </Link>
              </td>
              <td className="px-2">
                <Link href="https://github.com/LucasMillart/blog" target="_blank" className="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}