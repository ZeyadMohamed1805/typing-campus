import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const providerName = args[0];

if (!providerName) {
    console.error("Usage: npm run generate:provider <ProviderName>");
    process.exit(1);
}

const providerDir = path.join("resources/src/providers");
const providerFile = path.join(providerDir, `${providerName}.provider.tsx`);

// Ensure the providers directory exists
fs.mkdirSync(providerDir, { recursive: true });

// Provider Component
const providerTemplate = `import React, { ReactNode } from "react";

interface ${providerName}Props {
  children: ReactNode;
}

const ${providerName}: React.FC<${providerName}Props> = ({ children }) => {
  return <>{children}</>;
};

export default ${providerName};
`;

fs.writeFileSync(providerFile, providerTemplate);
console.log(
    `✅ Provider "${providerName}" created successfully in "resources/src/providers/"`
);
