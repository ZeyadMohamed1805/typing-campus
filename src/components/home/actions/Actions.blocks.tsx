import { useActionsCtaButtonNavigation } from './Actions.hooks';
import styles from './Actions.module.scss';

export const ActionsHeader = () => {
    return (
        <div className="actions-header">
            <h2 className={styles.actionsTitle}>
                Start Your Journey Today!
            </h2>
        </div>
    );
}

export const ActionsDescription = () => {
    return (
        <p className={styles.actionsDescription}>
            Join thousands of learners improving their skills. Get
            started now and take the first step toward success.
        </p>
    );
}

export const ActionsCtaButton = () => {
    const actionsCtaButtonData = useActionsCtaButtonNavigation();

    return (
        <button type="button" className={styles.actionsCtaButton} onClick={actionsCtaButtonData.handleAuthNavigation}>Join Now!</button>
    );
}