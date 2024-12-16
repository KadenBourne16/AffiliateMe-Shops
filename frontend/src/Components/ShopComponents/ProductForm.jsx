import React, { useState, useEffect } from 'react';
import SpecificationCard from '../ShopComponents/SubComponents/ProductFormsSubComponents/SpecificationsCard';
import categoriesData from '../../../utils/categoriesData.json';
import { final_price, discount_amount } from '../../../utils/calculations/final_price';
import axios from 'axios';
import categoriesSubCat from '../../../utils/categories&subCategoriesData.json';

function ProductForm() {
    const [productDetails, setProductDetails] = useState({ "product_description": "" });
    const [error, setError] = useState();
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [specifications, setSpecifications] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState([]);
    const [pricingCal, setPricingCal] = useState(0);
    const [shippingOption, setShippingOption] = useState('');
    const [tag, setTag] = useState('');
    const [specificationinfo, setSpecificationInfo] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
    const [subCategories, setSubCategories] = useState([]);

    const handleImageSelect = (e) => {
        const selectedImagesVar = e.target.files;

        if (selectedImagesVar.length > 4) {
            setSelectedImage([]);
            alert("Cannot select more than 4 images");
        } else {
            setSelectedImage([...selectedImagesVar]);
        }
    };

    useEffect(() => {
        const showSubCat = () => {
            const selectedCat = categoriesSubCat.categories.find(cat => cat.value === selectedCategory);
            if (selectedCat) {
                const selectSubCat = Object.keys(selectedCat.subcategories); // Get subcategory names
                setSubCategories(selectSubCat);
            } else {
                setSubCategories([]); // Reset if no category is found
            }
        };

        showSubCat();
    }, [selectedCategory]); // Run effect when selectedCategory changes

    const CheckDescriptionLength = (e) => {
        const { name, value } = e.target;
        setCharacterCount(value.length);
        if (name === "product_description" && value.length > 500) {
            setProductDetails((values) => ({ ...values, "product_description": value }));
            const errorMessage = "Product description cannot be more than 500 characters";
            setError(errorMessage);
            setIsErrorVisible(true);
        } else {
            setIsErrorVisible(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        console.log(productDetails);
    }, [productDetails]);

    const handlePricing = (e) => {
        e.preventDefault();
        const base_price = parseFloat(document.querySelector('input[name="base_price"]').value);
        const discount = parseFloat(document.querySelector('input[name="discount"]').value);
    
        if (!isNaN(base_price)) {
            if (isNaN(discount)) {
                setPricingCal(base_price);
            } else {
                const finalPriceValue = final_price(base_price, discount);
                setPricingCal(finalPriceValue);
            }
        } else {
            setPricingCal(0);
        }
    };

    const handleAddSpecification = (label, property) => {
        setSpecifications([...specifications, { label, property }]);
        setSpecificationInfo({ label: '', property: '' });
    };

    const handleDeleteSpecification = (index) => {
        setSpecifications(specifications.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        const productData = {
            ...productDetails,
            specifications,
            pricing: pricingCal,
            shipping: shippingOption,
            tags: tag,
            images: selectedImage
        };

        try {
            const response = await axios.post('http://localhost:3000/affluencelink/products', productData);
            console.log('Product added successfully:', response.data);
        } catch ( error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className='bg-slate-50'>
            <div className="max-w-7xl mx-auto p-4">
                <div className="p-2">
                    <div className="flex justify-between items-center mb-6 shadow-lg h-16 w-full p-5">
                        <h1 className="text-2xl font-semibold">Add a product</h1>
                        <div>
                            <button className="text-gray-500 mr-4" onClick={() => console.log('Discarded')}>Discard</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}> Add product</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="shadow-lg p-4 rounded">
                                <h2 className="text-lg font-semibold mb-2">Basic information</h2>
                                <div className="space-y-4">
                                    <input type="text" name="product_name" placeholder="Product name" className="w-full p-2 border rounded" onChange={handleChange} />
                                    <input type="text" name="manufacturer" placeholder="Manufacturer Name:" className="w-full p-2 border rounded" onChange={handleChange} />
                                    <input type="text" name="identification_number" placeholder="Product Identification No.:" className="w-full p-2 border rounded" onChange={handleChange} />
                                    <input type="text" name="product_summary" placeholder="Product Summary:" className="w-full p-2 border rounded" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="shadow-lg p-4 rounded">
                                <h2 className="text-lg font-semibold mb-2">Add Images</h2>
                                <div className='space-y-5'>
                                    {selectedImage.length > 0 ? (
                                        [...selectedImage].map((image, index) => (
                                            <img 
                                            key={index} 
                                            src={URL.createObjectURL(image)} 
                                            alt={`Image ${index + 1}`} 
                                            onError={(event) => { console.error('Error loading image:', event); event.target.src = '(link unavailable)'; }} 
                                            className='h-25 w-25 object-cover rounded-md border border-gray-900'
                                            />
                                        ))
                                    ) : (
                                        <h1 className='text-red-400'>No Images yet/Images more than 4</h1>
                                    )}
                                </div>
                                <div className="flex justify-center items-center w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    <input type="file" accept='image/*' multiple onChange={handleImageSelect} className="w-full text-white file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-transparent file:hover:bg-green-700 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Details</h2>
                            <div className="space-y-4">
                                <textarea name="product_description" placeholder="Product description:" className="w-full p-2 border rounded h-96" onChange={CheckDescriptionLength}></textarea>
                                <div>
                                    <h1 className='text-gray-500 opacity-70 text-right'>{characterCount}/500</h1>
                                </div>
                                {isErrorVisible && <h1 className='text-red-400'>{error}</h1>}
                            </div>
                        </div>
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
                            <div className="space-y-2">
                                <SpecificationCard specifications={specifications} onDelete={handleDeleteSpecification}/>
                                <div className="flex space-x-2">
                                    <input type="text" placeholder="Label" className="w-full p-2 border rounded" onChange={(e) => setSpecificationInfo({ ...specificationinfo, label: e.target.value })} />
                                    <input type="text" placeholder="Property" className="w-full p-2 border rounded" onChange={(e) => setSpecificationInfo({ ...specificationinfo, property: e.target.value })} />
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleAddSpecification(specificationinfo.label, specificationinfo.property)}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Type</h2>
                            <div className="space-y-4">
                                <select className="w-full p-2 border rounded" onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option>Select category:</option>
                                    {categoriesData.categories.map((category) => (
                                        <option className='hover:bg-green-600' key={category.value} value={category.value}>
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                                <select className="w-full p-2 border rounded">
                                    <option>Select sub-category:</option>
                                    {subCategories.map((subCategory) => (
                                        <option value={subCategory} key={subCategory}>{subCategory}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Tags</h2>
                            <input type="text" placeholder="Add a keyword:" className="w-full p-2 border rounded" value={tag} onChange={(e) => setTag(e.target.value)} />
                        </div>
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Pricing</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input name="base_price" type="number" placeholder="Base Price:" className="w-full p-2 border rounded" onChange={handlePricing} />
                                    <select className="p-2 border rounded">
                                        <option>GHA</option>
                                    </select>
                                </div>
                                <input name="discount" type="number" placeholder="Discount in percentage:" className="w-full p-2 border rounded" onChange={handlePricing} />
                                <input disabled name="final_price" type="number" placeholder="Final price:" value={pricingCal} className="w-full p-2 border rounded" />
                            </div>
                        </div>
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Shipping</h2>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" name="shipping" value="vendor" className="mr-2" onChange={(e) => setShippingOption(e.target.value)} />
                                    <label>Delivered by vendor (you)</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="shipping" value="affluencelink" className="mr-2" onChange={(e) => setShippingOption(e.target.value)} />
                                    <label>Delivered by AffluenceLink <span className="text-orange-500">(Unavailable)</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 shadow-lg p-4 rounded">
                    <button className="text-gray-500" onClick={() => console.log('Discarded')}>Discard</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add product</button>
                </div>
            </div>
        </div>
    );
}

export default ProductForm;