import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 6
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-2 pb-4 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-serif font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {siteMetadata.blogTitle}
          </h1>
          <p className="text-m leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
        {!posts.length && 'No posts found.'}

        {posts.slice(0, 1).map((frontMatter) => {
          const { slug, date, title, summary, tags, image } = frontMatter
          return (
            <Link key={slug} to={slug}>
              <div className="mx-auto flex md:flex-row flex-col items-center jobcard">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center">
                  <figure className="visible">
                    <div className="">
                      <div className="pt-10 px-2 sm:px-6">
                        <span className="inline-block py-1 px-2 rounded-md bg-green-600 text-white text-xs font-bold tracking-widest mb-2">
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                        </span>
                        &nbsp; &nbsp;
                        <span className="inline-block py-1 px-2 rounded-md bg-yellow-600 text-white  text-xs font-bold tracking-widest mb-2">
                          Más reciente
                        </span>
                        <img
                          className="object-scale-down lg:w-11/12 md:hidden rounded-md"
                          src={image}
                          alt={title}
                        ></img>
                        <h2 className="font-serif text-2xl font-bold leading-8 tracking-tight sm:text-4xl mb-4 font-medium ">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <p className="font-text prose text-gray-500 max-w-none dark:text-gray-400 pb-8">
                          {summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center pb-12">
                            <div className="text-base font-medium leading-6">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                /* aria-label={`Read "${title}"`} */
                              >
                                Leer más &rarr;
                              </Link>
                            </div>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 sm:block">
                  <img
                    className="object-cover object-center object-scale-down rounded-md hidden md:block lg:w-11/12 md:object-contain"
                    alt={title}
                    src={image}
                  />
                </div>
              </div>
            </Link>
          )
        })}

        {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-4 pb-4 space-y-2 md:space-y-5">
            <h1 className="text-xl font-serif font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Artículos recientes
            </h1>
          </div>
        </div> */}

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(1, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, image } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <span className="inline-block py-1 px-2 rounded-md bg-green-600 text-white text-xs font-bold tracking-widest mb-2">
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                        </span>
                        <img
                          className="object-scale-down lg:w-11/12 md:object-contain rounded-md"
                          src={image}
                          alt={title}
                        ></img>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-serif text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="font-text prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Leer más &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            Todos los artículos &rarr;
          </Link>
        </div>
      )}

      <div className="min-w-screen mt-16 flex items-center justify-center px-5 py-5">
        <div className="w-full mx-auto rounded-lg bg-gray-50 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:bg-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img src={siteMetadata.image} alt=""></img>
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-5xl text-blue-700 text-left leading-tight h-3 dark:text-blue-200">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5 dark:text-white">
              Si decides hacer #Scrum porque piensas o alguien te vendió la #idea de que te va a
              ayudar a "Gerenciar tu proyecto", te recomiendo que{' '}
              <span className="font-serif">NO LO HAGAS</span>, te vas a decepcionar, el equipo de
              trabajo y la empresa se van a frustrar con los resultados y terminarán diciendo "Scrum
              no sirve".
            </p>
            <div className="text-5xl text-blue-700 text-right leading-tight h-3 -mt-3 dark:text-blue-200">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="font-serif text-lg text-blue-700 font-bold text-center dark:text-blue-100">
              {siteMetadata.author}
            </p>
            <p className="text-xs text-gray-500 text-center dark:text-blue-200">
              {siteMetadata.twitter_user}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/imarvin"
            rel="noreferrer noopener"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all bg-gray-200 shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              alt="Ahora puedes invitarme a una pizza."
              src={siteMetadata.buy_me_a_pizza}
            />
          </a>
        </div>
      </div>
    </>
  )
}
