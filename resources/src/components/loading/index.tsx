import { useEffect, useState } from "react";
import Overlay from "./overlay/Overlay";
import Spinner from "./spinner/Spinner";
import { router } from "@inertiajs/react";

const Main = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        router.on('start', () => setLoading(true));
        router.on('finish', () => setLoading(false));
    }, []);

    if (!loading) {
        return null;
    }

    return (
        <Overlay>
            <Spinner />
        </Overlay>
    );
}

export default Main;