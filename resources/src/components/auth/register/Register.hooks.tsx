import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RegisterSchema from "./Register.schema";
import { router } from "@inertiajs/react";

export const useRegister = () => {
    const formData = useForm({
        resolver: yupResolver(RegisterSchema),
        mode: "all",
    });

    const onSubmit = formData.handleSubmit((data) => {
        console.log(data);

        router.post("/auth/register", data, {
            onError: (response) => {
                console.error("Validation errors from server:", response);
            },
            onSuccess: (response) => {
                console.log("User registered successfully!", response);
            },
            showProgress: false,
        });
    });

    return { formData, onSubmit };
};
