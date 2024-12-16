export const discount_amount = (base, discount) => {
    // Calculate the discount amount
    return base * (discount / 100);
}

export const final_price = (base, discount) => {
    // Calculate the discount amount using the discount_amount function
    const discountValue = discount_amount(base, discount);
    // Calculate the final price
    return base - discountValue;
}

// Example usage
const base = 300; // Base price
const discount_value = 15; // Discount percentage

const discount = discount_amount(base, discount_value);
const finalPrice = final_price(base, discount_value);

console.log("Discount Amount:", discount); // Output: 45
console.log("Final Price:", finalPrice); // Output: 255

