import { ActionsCtaButton, ActionsDescription, ActionsHeader } from "./Actions.blocks";
import styles from "./Actions.module.scss";

const Actions = () => {
    return (
        <section className={styles.actionsSection}>
            <div className={styles.actionsWrapper}>
                <ActionsHeader />
                <ActionsDescription />
                <ActionsCtaButton />
            </div>
        </section>
    );
};

export default Actions;
