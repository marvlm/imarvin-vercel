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
            El Blog de Marvin López
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
    </>
  )
}
