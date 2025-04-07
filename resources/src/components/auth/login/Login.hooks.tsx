import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./Login.schema";
import { router } from "@inertiajs/react";

export const useLogin = () => {
    const formData = useForm({
        resolver: yupResolver(LoginSchema),
        mode: "all",
    });

    const onSubmit = formData.handleSubmit((data) => {
        router.post("/auth/login", data, { showProgress: false });
    });

    return { formData, onSubmit };
};
