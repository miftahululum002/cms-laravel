import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";
import { useState } from "react";
export default function Login({ status, title, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        categories: [],
    });
    const [selectedCategories, setselectedCategories] = useState([]);
    const handleChangeCategories = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(
            (option) => option.value
        );
        setselectedCategories(selectedOptions);
        setData("categories", selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("dashboard.posts.store"), {
            onFinish: () => reset("content"),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="w-1/2 mx-auto my-10 bg-white p-2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <InputLabel htmlFor="title" value="Judul" />
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="title"
                            placeholder="Judul"
                            isFocused={true}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="categories" value="Kategori" />
                        <select
                            className="form-select w-full rounded-none"
                            id="categories"
                            name="categories"
                            multiple={true}
                            defaultValue={[""]}
                            onChange={handleChangeCategories}
                        >
                            <option>Pilih</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <TextInput
                        type="hidden"
                        name="categories"
                        value={data.categories}
                    />
                    <div className="mb-3">
                        <InputLabel htmlFor="content" value="Konten" />
                        <TextArea
                            id="content"
                            name="content"
                            value={data.content}
                            className="mt-1 block w-full"
                            autoComplete="content"
                            placeholder="Konten"
                            isFocused={true}
                            onChange={(e) => setData("content", e.target.value)}
                        ></TextArea>
                        <InputError message={errors.content} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Simpan
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
