import Front from "@/Layouts/FrontLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ title, posts }) {
    return (
        <Front>
            <Head title={title} />
            <section id="blog" className="pt-36 pb-32 bg-white">
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
                            <div className="w-full px-4 lg:w-1/2 xl:w-1/4">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 max-h-96">
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
