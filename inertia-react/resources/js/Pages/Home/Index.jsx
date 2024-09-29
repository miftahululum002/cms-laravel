import Front from "@/Layouts/FrontLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ title, posts }) {
    return (
        <Front>
            <Head title={title} />
            <section id="home" className="pt-36">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 py-40">
                            <h1 className="text-base font-semibold text-primary md:text-xl">
                                Selamat Datang Semua 👋
                                <span className="mt-1 block text-4xl font-bold text-dark lg:text-5xl"></span>
                            </h1>
                            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                                Ukir sejarah &nbsp;
                                <span className="text-dark">Tulisan</span>
                            </h2>
                            <p className="mb-10 font-medium leading-relaxed text-secondary">
                                Menulis adalah cara terbaik untuk mengungkapkan
                                apa yang ada di dalam pikiran kita. Jika Anda
                                memiliki ide, cerita, atau pengalaman yang ingin
                                dibagikan, kami siap membantu Anda. Jangan ragu
                                untuk menghubungi kami jika Anda memiliki
                                pertanyaan atau ingin berkolaborasi. Kami akan
                                senang mendengar dari Anda.
                                <span className="font-bold text-dark">
                                    Tulisan!
                                </span>
                            </p>

                            <a
                                href={route("register")}
                                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg mb-10"
                            >
                                Daftar Sekarang
                            </a>
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
                        {posts.map((post, index) => (
                            <div
                                className="w-full px-4 lg:w-1/2 xl:w-1/3"
                                key={index}
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                    <img
                                        src={"/storage/" + post.image}
                                        className="w-full h-48 object-cover"
                                        alt={post.title}
                                    />
                                    <div className="py-8 px-4">
                                        <h3>
                                            <a
                                                href="#"
                                                className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                                            >
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="font-medium text-base text-secondary mb-4">
                                            {post.content.substring(0, 50)} ...
                                        </p>
                                        <a
                                            href={route(
                                                "home.blog.read",
                                                post.slug
                                            )}
                                            className="font-medium text-white bg-primary py-2 px-4 rounded-none hover:opacity-80"
                                        >
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Front>
    );
}
