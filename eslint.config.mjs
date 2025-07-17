export default [
    {
        ignores: ["**/node_modules", "**/dist", "**/out"]
    },
    eslint,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    {
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    {
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"]
        }
    },
    {
        files: ["**/*.{js,jsx}"],
        plugins: {
            "react-hooks": eslintPluginReactHooks,
            "react-refresh": eslintPluginReactRefresh
        },
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
            ...eslintPluginReactRefresh.configs.vite.rules
        }
    },
    eslintConfigPrettier
];
