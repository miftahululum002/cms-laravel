import SectionSocialLink from "@/Components/SectionSocialLink";
import { Link, usePage } from "@inertiajs/react";

export default function Front({ children }) {
    const appName = import.meta.env.VITE_APP_NAME || "Laravel";
    const auth = usePage().props.auth;
    const home_categories = usePage().props.home_categories;
    const author = usePage().props.author;
    return (
        <>
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a
                                href={route("home.index")}
                                className="font-bold text-lg text-primary block py-6"
                            >
                                {appName}
                            </a>
                        </div>
                        <div className="flex items-center px-4">
                            <button
                                id="hamburger"
                                name="hamburger"
                                type="button"
                                className="block absolute right-4 lg:hidden"
                            >
                                <span className="humberger-line origin-top-left transition duration-300 ease-in-out"></span>
                                <span className="humberger-line transition duration-300 ease-in-out"></span>
                                <span className="humberger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                            </button>
                            <nav
                                id="nav-menu"
                                className="hidden absolute py-5 bg-white shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:dark:bg-transparent"
                            >
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <a
                                            href={route("home.index")}
                                            className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                                        >
                                            Beranda
                                        </a>
                                    </li>
                                    <li className="group">
                                        <a
                                            href={route("home.blog.index")}
                                            className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className="group">
                                        <a
                                            href={route("home.about")}
                                            className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                                        >
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li className="group">
                                        <a
                                            href={route("home.contact")}
                                            className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                                        >
                                            Hubungi Kami
                                        </a>
                                    </li>
                                    <nav className="mx-3 flex flex-1 justify-end">
                                        {auth.user ? (
                                            <Link
                                                href={route("dashboard")}
                                                className="rounded-none px-3 py-2 text-white bg-primary ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route("login")}
                                                    className="rounded-none px-3 py-2 mr-2 text-white bg-primary ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route("register")}
                                                    className="rounded-none px-3 py-2 text-white bg-primary ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                >
                                                    Register
                                                </Link>
                                            </>
                                        )}
                                    </nav>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div>{children}</div>
            <footer className="bg-dark pt-24 pb-12">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
                            <h2 className="font-bold text-4xl text-white mb-5">
                                {appName}
                            </h2>
                            <p>{author.email}</p>
                            <p>{author.address}</p>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/2">
                            <h3 className="font-semibold text-xl text-white mb-5">
                                Kategori Tulisan
                            </h3>
                            <ul className="text-slate-300">
                                {home_categories.map((category, index) => (
                                    <li key={index}>
                                        <a
                                            href={
                                                route("home.blog.index") +
                                                "?category=" +
                                                category.slug
                                            }
                                            className="inline-block text-base hover:text-primary mb-3"
                                        >
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full pt-10 border-t border-slate-700">
                        <div className="flex items-center justify-center mb-5">
                            <SectionSocialLink />
                        </div>
                        <p className="font-medium text-xs text-slate-500 text-center">
                            Dibuat dengan{" "}
                            <span className="text-pink-500">❤️</span> oleh
                            <a
                                href="#"
                                target="_blank"
                                className="text-bold text-primary"
                            >
                                Author
                            </a>
                            , menggunakan
                            <a
                                href="https://tailwindcss.com"
                                target="_blank"
                                className="font-bold text-sky-500"
                            >
                                tailwind CSS
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
            <a
                href="#home"
                className="fixed hidden justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
                id="to-top"
            >
                <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
            </a>
        </>
    );
}
