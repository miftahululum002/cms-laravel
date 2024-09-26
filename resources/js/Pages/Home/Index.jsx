import Front from "@/Layouts/FrontLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, title }) {
    return (
        <Front>
            <Head title={title} />
            <section id="home" className="pt-36">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="text-base font-semibold text-primary md:text-xl">
                                Halo Semua 👋, saya
                                <span className="mt-1 block text-4xl font-bold text-dark lg:text-5xl"></span>
                            </h1>
                            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                                IT Enthusiast &
                                <span className="text-dark">
                                    Backend Developer
                                </span>
                            </h2>
                            <p className="mb-10 font-medium leading-relaxed text-secondary">
                                Belajar web programming itu mudah dan
                                menyenangkan bukan.
                                <span className="font-bold text-dark">
                                    bukan!
                                </span>
                            </p>

                            <a
                                href={route("home.contact")}
                                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2">
                            <div className="relative mt-10 lg:right-0 lg:mt-9">
                                <img
                                    src="dist/img/miftahul.png"
                                    alt="Miftahul Ulum"
                                    className="relative z-10 mx-auto max-w-full"
                                />
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 md:scale-125">
                                    <svg
                                        width="400"
                                        height="400"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#06b6d4"
                                            d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                                            transform="translate(100 100) scale(1.1)"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="pt-36 pb-32">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2">
                            <h4 className="font-bold uppercase text-lg text-primary mb-3">
                                Tentang Kami
                            </h4>
                            <h2 className="font-bold text-3xl text-dark mb-5 max-w-md lg:text-4xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur, molestiae?
                            </h2>
                            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugiat repellendus, at totam
                                repudiandae similique aperiam animi tempora
                                expedita.
                            </p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                                Mari berteman
                            </h3>
                            <p className="font-medium text-balance text-secondary mb-6 lg:text-lg">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Deleniti ex incidunt saepe,
                                hic neque tenetur voluptatem? Error assumenda
                                velit dolore.
                            </p>
                            <div className="flex items-center">
                                <a
                                    href="https://www.youtube.com/@codoprodotid"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <svg
                                        role="img"
                                        width="20"
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>YouTube</title>
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/berandal_usaha_apik"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <svg
                                        role="img"
                                        width="20"
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Instagram</title>
                                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/miftahululum002"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <svg
                                        role="img"
                                        width="20"
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>LinkedIn</title>
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog" className="pt-36 pb-32 bg-slate-100">
                <div className="container mx-auto">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">
                                Blog
                            </h4>
                            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                                Tulisan Terbaru
                            </h2>
                            <p className="font-medium text-md text-secondary md:text-lg">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Soluta numquam natus aperiam
                                iusto?
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap" id="blog-content">
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img
                                    src="dist/img/blog/1.jpeg"
                                    alt="Programming"
                                />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="#"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Tips Belajar Programming
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Provident,
                                        repudiandae.
                                    </p>
                                    <a
                                        href="blog.html"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img
                                    src="dist/img/blog/2.jpg"
                                    alt="Mechanical keyboard"
                                />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="blog.html"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Review Mechanical Keyboard
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Esse repellendus, unde
                                        recusandae nesciunt rem optio.
                                    </p>
                                    <a
                                        href="#"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img src="dist/img/blog/1.jpeg" alt="Coffe" />
                                <div className="py-8 px-4">
                                    <h3>
                                        <a
                                            href="blog.html"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                        >
                                            Menikmati Secangkir Kopi
                                        </a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deleniti,
                                        reprehenderit.
                                    </p>
                                    <a
                                        href="blog.html"
                                        className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                                    >
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Front>
    );
}
