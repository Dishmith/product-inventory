// ============================================
// Q1: Basic Types and Variables
// ============================================
let productName: string = "Wireless Mouse";
let price: number = 799.99;
let inStock: boolean = true;
let tags: string[] = ["electronics", "accessories", "wireless"];
let productId: number | string = 101;

function printProductInfo(): void {
  console.log(
    `Product: ${productName} | ID: ${productId} | Price: Rs.${price.toFixed(2)} | In Stock: ${inStock} | Tags: ${tags.join(", ")}`
  );
}
printProductInfo();

// Unsafe any
let tempValue: any = "ABC123";
tempValue = 123;

// Refactored safe version
let productCode: string = "ABC123";
console.log("productCode:", productCode);

// ============================================
// Q2: Functions and Scope
// ============================================
function calculateDiscount(price: number, discountPercent: number = 10): number {
  return price - (price * discountPercent) / 100;
}
console.log("Default discount:", calculateDiscount(1000));
console.log("20% discount:", calculateDiscount(1000, 20));

function applyBulkDiscount(prices: number[], discountRate: number): number[] {
  return prices.map((p) => p - (p * discountRate) / 100);
}
console.log("Bulk discounted prices:", applyBulkDiscount([100, 200, 300], 10));

function blockScopeDemo(): void {
  for (let i = 0; i < 3; i++) {
    console.log("Inside loop (let):", i);
  }
}
function functionScopeDemo(): void {
  for (var j = 0; j < 3; j++) {}
  console.log("Outside loop (var):", j);
}
blockScopeDemo();
functionScopeDemo();

// ============================================
// Q3: Interfaces and Objects
// ============================================
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags?: string[];
}

const products: Product[] = [
  { id: 1, name: "Wireless Mouse",      price: 799,  inStock: true,  tags: ["electronics", "accessories"] },
  { id: 2, name: "Mechanical Keyboard", price: 2499, inStock: false, tags: ["electronics", "keyboard"] },
  { id: 3, name: "USB-C Hub",           price: 1499, inStock: true,  tags: ["accessories"] },
  { id: 4, name: "Laptop Stand",        price: 999,  inStock: true }
];

function getAvailableProducts(products: Product[]): Product[] {
  return products.filter((p) => p.inStock);
}
console.log("Available products:", getAvailableProducts(products));

interface DiscountedProduct extends Product {
  discountPercent: number;
}

function applyDiscountToProducts(
  products: Product[],
  discountPercent: number
): DiscountedProduct[] {
  return products.map((p) => ({
    ...p,
    price: Number((p.price - (p.price * discountPercent) / 100).toFixed(2)),
    discountPercent
  }));
}
console.log("Discounted products:", applyDiscountToProducts(products, 15));
