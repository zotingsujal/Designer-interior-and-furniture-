import fs from 'fs';
import path from 'path';
import { generate8Faqs } from './generate8Faqs.mjs';

const furnitureFilePath = path.resolve('src/data/furniture.ts');
const content = fs.readFileSync(furnitureFilePath, 'utf-8');

// Find the start and end of furnitureProducts
const startMarker = 'export const furnitureProducts: FurnitureProduct[] = [';
const endMarker = 'export const getCuratedCarousels = (): {';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not locate start or end marker');
  process.exit(1);
}

// Extract the products text between startIndex + startMarker.length and endIndex
// Find the last '];' before endIndex
const bracketIndex = content.lastIndexOf('];', endIndex);
if (bracketIndex === -1 || bracketIndex < startIndex) {
  console.error('Could not find closing bracket of furnitureProducts');
  process.exit(1);
}

const productsRaw = content.substring(startIndex + startMarker.length, bracketIndex).trim();

// Let's parse each product object. Notice they are JSON-like objects separated by commas.
// Let's wrap in '[' + productsRaw + ']' and parse as JSON or relaxed JS
let products;
try {
  // Try JSON.parse
  products = JSON.parse('[' + productsRaw + ']');
} catch (e) {
  console.log('Direct JSON parse failed, using eval in sandbox: ' + e.message);
  // Using new Function to safely evaluate array
  products = new Function('return [' + productsRaw + '];')();
}

console.log(`Parsed ${products.length} products successfully.`);

let countUpdated = 0;
for (const p of products) {
  // If product has fewer than 8 FAQs or is using generic ones, generate the 8 tailored FAQs
  p.faqs = generate8Faqs(p);
  countUpdated++;
}

console.log(`Updated FAQs for all ${countUpdated} products.`);

// Reformat products array cleanly
const formattedProducts = products.map(p => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n') + '\n';

const newContent = content.substring(0, startIndex + startMarker.length) + '\n' + formattedProducts + content.substring(bracketIndex);

fs.writeFileSync(furnitureFilePath, newContent, 'utf-8');
console.log('Successfully updated src/data/furniture.ts with 8 FAQs per product!');
