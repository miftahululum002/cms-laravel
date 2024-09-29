import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-primary text-white";
        } else {
            return "mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links.length > 3 && (
            <div className="mb-2 mt-2 flex justify-center">
                <div className="flex flex-wrap">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <div
                                id="pagination-prev"
                                key={key}
                                className="mr-1 mb-1 px-2 py-2 text-sm leading-4 border rounded"
                            >
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                id="pagination-next"
                                key={key}
                                className={
                                    getClassName(link.active) + ` text-primary`
                                }
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}
