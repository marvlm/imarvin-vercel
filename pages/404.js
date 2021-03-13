import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-4">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
        <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
          <h1 className="font-light font-serif text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
            Esta página no existe...
          </h1>
          <Link href="/">
            <button className="inline px-4 py-2 mt-16 text-sm font-medium leading-5 text-white text-lg transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500">
              Volver al Inicio
            </button>
          </Link>
        </div>
        <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
          <img alt="404 error, Page not found" src="/static/images/404.png" />
        </div>
      </div>
    </div>
  )
}
