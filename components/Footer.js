import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/logo.svg'
import DarkLogo from '@/data/logo-dark.svg'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {theme === 'dark' ? (
            <div className="mr-3 w-8/12">
              <DarkLogo />
            </div>
          ) : (
            <div className="r-3 w-8/12">
              <Logo />
            </div>
          )}
        </div>
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Made with Tailwind + Nextjs
          </Link>
        </div>
      </div>
    </footer>
  )
}
