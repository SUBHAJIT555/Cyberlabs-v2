import fs from "fs";
import { execSync } from "child_process";

const files = execSync('rg -l assetSrc src --glob "*.tsx"', { encoding: "utf8" })
  .trim()
  .split(/\r?\n/)
  .filter(Boolean);

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  if (content.includes("assetSrc(")) continue;

  content = content.replace(
    /import\s*\{\s*assetSrc\s*,\s*([^}]+)\}\s*from\s*["']@\/lib\/utils["'];?\n?/,
    'import { $1 } from "@/lib/utils";\n',
  );
  content = content.replace(
    /import\s*\{\s*([^,}]+),\s*assetSrc\s*\}\s*from\s*["']@\/lib\/utils["'];?\n?/,
    'import { $1 } from "@/lib/utils";\n',
  );
  content = content.replace(
    /import\s*\{\s*assetSrc\s*\}\s*from\s*["']@\/lib\/utils["'];?\n?/,
    "",
  );
  fs.writeFileSync(file, content);
}
