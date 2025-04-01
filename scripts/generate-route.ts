import fs from "fs";
import path from "path";

// Paths
const routesFilePath = path.join(
    process.cwd(),
    "src",
    "router",
    "Router.constants.tsx"
);
const pagesDir = path.join(process.cwd(), "src", "pages");

// Get command-line arguments
const [customPageName, routePath] = process.argv.slice(2);

if (!routePath || !customPageName) {
    console.error("❌ Usage: node addRoute.js <route-path> <page-name>");
    console.error("Example: node addRoute.js auth/register RegisterPage");
    process.exit(1);
}

// Ensure page name follows PascalCase
const componentName = customPageName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

// Define new component file path
const newPageFile = path.join(pagesDir, `${componentName}.tsx`);

// Create the TSX file for the new page
if (!fs.existsSync(newPageFile)) {
    const tsxTemplate = `const ${componentName} = () => {
    return (
        <div>
            <h1>${componentName}</h1>
            <p>This is the ${routePath} page.</p>
        </div>
    );
};

export default ${componentName};`;

    fs.writeFileSync(newPageFile, tsxTemplate, "utf8");
    console.log(`✅ Created ${newPageFile}`);
} else {
    console.log(`⚠️ Page file already exists: ${newPageFile}`);
}

// Modify the routes array in `Router.constants.tsx`
fs.readFile(routesFilePath, "utf8", (err, data) => {
    if (err) {
        console.error(`❌ Error reading ${routesFilePath}:`, err);
        return;
    }

    // Check if route already exists
    if (data.includes(`path: "/${routePath}"`)) {
        console.log(`⚠️ Route already exists: /${routePath}`);
        return;
    }

    // Add import statement
    const importStatement = `import ${componentName} from "../pages/${componentName}";\n`;

    // Find where to insert the new route
    const updatedData = data.replace(
        /(APPLICATION_ROUTES:\s*Array<RouteProps>\s*=\s*\[)([\s\S]*?)(\n\];)/,
        `$1$2,\n    { path: "/${routePath}", Component: ${componentName} }$3`
    );

    // Ensure import is added at the top
    const finalData = importStatement + updatedData;

    fs.writeFileSync(routesFilePath, finalData, "utf8");
    console.log(`✅ Added route: /${routePath} to ${routesFilePath}`);
});
