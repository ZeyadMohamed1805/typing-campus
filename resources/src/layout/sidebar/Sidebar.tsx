import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    BookOpen,
    Sword,
    ClipboardCheck,
    BarChart2,
    Trophy,
    Target,
    Gamepad2,
    UserCircle,
    LogOut
} from 'lucide-react';
import styles from './Sidebar.module.scss';

const navItems = [
    { href: '/dashboard', label: 'Overview', icon: <LayoutDashboard /> },
    { href: '/dashboard/tutorials', label: 'Tutorials', icon: <BookOpen /> },
    { href: '/dashboard/battles', label: 'Online Battles', icon: <Sword /> },
    { href: '/dashboard/tests', label: 'Practice Tests', icon: <ClipboardCheck /> },
    { href: '/dashboard/analytics', label: 'Analytics', icon: <BarChart2 /> },
    { href: '/dashboard/leaderboard', label: 'Leaderboard', icon: <Trophy /> },
    { href: '/dashboard/challenges', label: 'Challenges', icon: <Target /> },
    { href: '/dashboard/modes', label: 'Game Modes', icon: <Gamepad2 /> },
    { href: '/dashboard/profile', label: 'Profile', icon: <UserCircle /> },
    { href: '/dashboard/logout', label: 'Logout', icon: <LogOut /> },
];

export default function Sidebar() {
    const { url } = usePage();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>Typing Campus</div>

            <nav className={styles.nav}>
                {navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`${styles.navItem} ${url.startsWith(href) ? styles.active : ''}`}
                    >
                        <span className={styles.icon}>{icon}</span>
                        <span className={styles.label}>{label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
