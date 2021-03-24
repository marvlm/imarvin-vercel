import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetdata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetdata.siteUrl}/blog/${slug}`)}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags, summary } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <span className="inline-block py-1 px-2 rounded-md bg-green-600 text-white text-xs font-bold tracking-widest mb-2">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetdata.locale, postDateTemplate)}
                      </time>
                    </span>
                  </dd>
                </div>
              </dl>
              <div className="font-serif">
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="font-sans italic">{frontMatter.summary}</div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-0 pb-10 xl:pt-0"></dl>
            <div className="xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-0 pb-8 prose dark:prose-dark max-w-none font-text">{children}</div>
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <a href="/about">
                      <img
                        src={siteMetdata.image}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </a>
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="font-serif text-xl text-gray-900 dark:text-gray-100">
                        <a href="/about" className="hover:text-gray-400">
                          {siteMetdata.author}
                        </a>
                      </dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        <Link
                          href={siteMetdata.twitter}
                          className="text-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {siteMetdata.twitter.replace('https://twitter.com/', '@')}
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>

              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <hr className="divide-y divide-gray-200 border-gray-200" />
            </div>

            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Artículo anterior
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Siguiente Artículo
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  &larr; Todos los artículos
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
