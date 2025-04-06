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
              <th className="px-2 w-1/2"><Link href="/projets">Projets</Link></th>
              <th className="px-2 w-1/4">Statut</th>
              <th className="px-2 w-1/4">Lancement</th>
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
            </tr>
            <tr>
              <td className="px-2">
                <div className="flex items-center space-x-2">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src="/LM-logo-noire.png" alt="Alternance" width={48} height={48} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"><Link href="/projets/alternance">Alternance</Link></div>
                    <div className="text-sm opacity-50">Trouver une alternance</div>
                  </div>
                </div>
              </td>
              <td className="px-2"><span className="badge badge-primary">Actif</span></td>
              <td className="px-2">Déc 2024</td>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}