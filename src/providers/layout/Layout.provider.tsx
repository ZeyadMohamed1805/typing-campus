import { TChildrenProps } from "../../types";
import { CurrentLayout } from "./Layout.blocks";

const LayoutProvider = ({ children }: TChildrenProps) => {
    return (
        <>
            <CurrentLayout>{children}</CurrentLayout>
        </>
    );
};

export default LayoutProvider;
