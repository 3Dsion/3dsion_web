import fs from 'fs';

const content = fs.readFileSync('e:/ANTIGRAVITY/3dsion_web/backup_web_hostinger/assets/index-CEdVPieL.js', 'utf8');
const searchString = "Criterio Industrial";
const index = content.indexOf(searchString);

if (index !== -1) {
    const start = Math.max(0, index - 300);
    const end = Math.min(content.length, index + 300);
    console.log("--- PRODUCCION BUNDLE EXTRACT ---");
    console.log(content.substring(start, end));
    console.log("--------------------------------");
} else {
    console.log("No se encontró el texto en el bundle.");
}
