import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app/index.tsx'],
            refresh: true,
        }),
        react({
            include: [
                '**/*.tsx',
                '**/*.ts'
            ],
        }),
    ],
    resolve: {
        alias: {
            '~fonts': path.resolve(__dirname, 'resources/fonts'),
        },
    }
});
