use affiliatemedb;

CREATE TABLE shops (
    shopID INT AUTO_INCREMENT PRIMARY KEY, -- Random number, auto-incremented
    ownerID INT NOT NULL, -- References idUser  from user table
    shop_name VARCHAR(255) NOT NULL, -- Shop name
    business_type ENUM('Grocery', 'Apparel', 'Electronic', 'Automobile', 'General') NOT NULL, -- Business type
    email VARCHAR(255) UNIQUE, -- Unique email, can be NULL
    business_address VARCHAR(255) NOT NULL, -- Business address
    country INT NOT NULL, -- References country in user table
    region VARCHAR(100) NOT NULL, -- Region from select option
    district VARCHAR(100) NOT NULL, -- District from select option
    location VARCHAR(255), -- Location
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date created
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Date updated/modified
    FOREIGN KEY (ownerID) REFERENCES user(idUser ), -- Foreign key reference to user table
    FOREIGN KEY (country) REFERENCES countries(id) -- Foreign key reference to countries table
);

CREATE TABLE countries (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each country
    country_name VARCHAR(255) NOT NULL UNIQUE, -- Name of the country, must be unique
    country_code VARCHAR(10), -- Optional: ISO country code (e.g., 'US', 'GB', 'FR')
    region VARCHAR(100), -- Optional: Region the country belongs to (e.g., 'Africa', 'Asia', 'Europe')
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the record was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for when the record was last updated
);

CREATE TABLE products (
    vitaProductID INT NOT NULL, -- Not null, but not auto-increment
    shopID INT NOT NULL, -- References shopID in shops table
    ownerID INT NOT NULL, -- References idUser  in user table
    product_name VARCHAR(255) NOT NULL, -- Product name
    identification_number VARCHAR(100) NOT NULL, -- Identification number for the product
    manufacturer VARCHAR(255) NOT NULL, -- Manufacturer of the product
    product_summary TEXT, -- Summary of the product
    product_description TEXT NOT NULL, -- Long text for product description
    specifications JSON NOT NULL, -- JSON type to store specifications as an object array
    pricing DECIMAL(10, 2) NOT NULL, -- Pricing as a decimal number
    shipping ENUM('vendor', 'affluencelink') NOT NULL, -- Shipping options
    tags VARCHAR(255), -- Tags for the product
    category VARCHAR(100) NOT NULL, -- Category of the product
    subCategory VARCHAR(100) NOT NULL, -- Sub-category of the product
    images BLOB, -- BLOB to store images (4 or less)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the record was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp for when the record was last updated
    PRIMARY KEY (vitaProductID), -- Set vitaProductID as the primary key
    FOREIGN KEY (shopID) REFERENCES shops(shopID), -- Foreign key reference to shops table
    FOREIGN KEY (ownerID) REFERENCES user(idUser) -- Foreign key reference to users table
)