import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RegisterSchema from "./Register.schema";
import { TRegisterFormData } from "./Register.types";

export const useRegister = () => {
    const formData = useForm({ resolver: yupResolver(RegisterSchema) });

    const onSubmit = (data: TRegisterFormData) => {
        console.log("Form submitted", data);
    }

    return { formData, onSubmit };
}