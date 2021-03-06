import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import DarkLogo from '@/data/logo-dark.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import BuyMeAPizza from './BuyMeAPizza'
import { useTheme } from 'next-themes'

const LayoutWrapper = ({ children }) => {
  const { theme, setTheme } = useTheme()
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-4">
          <div>
            <Link href="/" aria-label="El Blog de Marvin López">
              <div className="flex items-center justify-between">
                {theme === 'dark' ? (
                  <div className="mr-3 w-8/12">
                    <DarkLogo />
                  </div>
                ) : (
                  <div className="r-3 w-8/12">
                    <Logo />
                  </div>
                )}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 hover:text-gray-400 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            {/* <BuyMeAPizza /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
