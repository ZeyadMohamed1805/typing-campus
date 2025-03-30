import fs from "fs";
import path from "path";

// Get arguments (Component Name & Directory)
const args = process.argv.slice(2);

// Validates the correct number of arguments are provided
if (args.length < 2) {
    console.error(
        "Usage: ts-node generate-component.ts ComponentName path/to/directory"
    );
    process.exit(1);
}

// Destructure arguments
const [componentName, targetDir] = args;

// Convert relative path to absolute path
const componentPath: string = path.join(
    process.cwd(),
    targetDir,
    componentName.toLowerCase()
);

// Ensure the directory exists
fs.mkdirSync(componentPath, { recursive: true });

// Component TSX file
const tsxContent: string = `import styles from "./${componentName}.module.scss";

const ${componentName} = () => {
  return <div className={styles.${componentName}}>${componentName}</div>;
};

export default ${componentName};
`;

// SCSS Module file
const scssContent: string = `.${componentName} {

}
`;

// Create the component files
fs.writeFileSync(
    path.join(componentPath, `${componentName}.tsx`),
    tsxContent,
    "utf8"
);
fs.writeFileSync(
    path.join(componentPath, `${componentName}.module.scss`),
    scssContent,
    "utf8"
);

console.log(`✅ Component ${componentName} created at ${componentPath}`);
