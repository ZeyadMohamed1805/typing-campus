import { InferType } from "yup";
import RegisterSchema from "./Register.schema";

export type TRegisterFormData = InferType<typeof RegisterSchema>;