import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-serif font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            ¡Hola! soy Marvin López
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 font-serif pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Ingeniero de Software</div>
            <div className="text-gray-500 dark:text-gray-400">Scrum Master y Agile Coach</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Un panameño residente en España, esposo de Carol, papá de dos beagles, hijo, hermano,
              tío, padrino, Ingeniero de Software, Scrum Master, Facilitador Ágil, Agile Mentor,
              Team Lead, Desarrollador web, blogger, nadador (no activo), fan del ProWrestling, de
              ver películas y series, de la tecnología y de aprender nuevas maneras de hacer las
              cosas, además, y como pueden ver en mi blog, un practicante entusiasta de la agilidad.
            </p>
            <p>
              Ayudo a organizaciones a construir productos de software de calidad siguiendo las
              mejores prácticas que apliquen en su propio contexto y que beneficien su propio
              proceso de transformación.
            </p>
            <p>
              Desde los inicios de mi carrera hasta el día de hoy he podido ejercer casi todos los
              roles involucrados en un equipo y proceso de desarrollo de software, desde el proceso
              de análisis e inception, pasando por el diseño, desarrollo, control de calidad,
              implantación, liderazgo, reclutamiento, formación y soporte al cliente. Además durante
              los últimos años he enfocado mi carrera en ayudar a equipos y organizaciones en su
              transformación ágil en los roles de Scrum Master, Trainer y Agile Coach.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
