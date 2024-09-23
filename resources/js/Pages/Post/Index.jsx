import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Post({ posts }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tulisan
                </h2>
            }
        >
            <Head title="Tulisan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-none p-3">
                        <div>
                            <PrimaryButton>Tambah</PrimaryButton>
                        </div>
                        <table className="table-auto w-full border-collapse border border-slate-400">
                            <thead className="border border-slate-300 my-4">
                                <tr>
                                    <th className="w-auto border border-slate-400">
                                        No
                                    </th>
                                    <th className="w-auto border border-slate-400 text-left">
                                        Judul
                                    </th>
                                    <th className="w-auto border border-slate-400 text-left">
                                        Konten
                                    </th>
                                    <th className="border border-slate-400 text-center">
                                        Opsi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td className="w-auto px-2 border border-slate-400 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {post.title}
                                        </td>
                                        <td className="w-auto px-2 border border-slate-400">
                                            {post.content}
                                        </td>
                                        <td className="px-2 border border-slate-400 text-center">
                                            <PrimaryButton>Lihat</PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
