import Description from "./description/Description";
import Forms from "./forms/Forms";
import Wrapper from "./wrapper/Wrapper";

const Main = () => {
    return (
        <main>
            <Wrapper>
                <Description />
                <Forms />
            </Wrapper>
        </main>
    );
};

export default Main;
