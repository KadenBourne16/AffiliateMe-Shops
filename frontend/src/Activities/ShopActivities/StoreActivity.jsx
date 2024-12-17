import React from 'react';

const Store = () => {
    // Dummy data
    const storeData = {
        profilePic: 'https://via.placeholder.com/80', // Placeholder image
        shopName: 'Awesome Store',
        owner: 'John Doe',
        accountType: 'Verified',
        country: 'USA',
        socialMedia: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            telegram: '#',
            whatsapp: '#',
        },
        description: 'This is an awesome store that sells a variety of products. We pride ourselves on quality and customer satisfaction. Our mission is to provide the best shopping experience for our customers.',
        shopID: '12345',
        businessType: 'Retail',
        region: 'California',
        district: 'Los Angeles',
        postal: '90001',
        location: '123 Main St, Los Angeles, CA',
        images: [
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
        ],
        topItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        topCustomers: ['Customer 1', 'Customer 2', 'Customer 3'],
    };

    return (
        <div className="max-w-10xl mx-auto p-2 h-screen bg-white"> {/* Increased max width and padding */}
            {/* Card 1: Store Info */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={storeData.profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{storeData.shopName}</h2> {/* Increased font size */}
                        <p>Owner: {storeData.owner}</p>
                        <p>Account Type: {storeData.accountType}</p>
                        <p>Country: {storeData.country}</p>
                        <div className="flex space-x-2 mt-2">
                            <a href={storeData.socialMedia.facebook} className="text-blue-600">Facebook</a>
                            <a href={storeData.socialMedia.twitter} className="text-blue-600">Twitter</a>
                            <a href={storeData.socialMedia.instagram} className="text-blue-600">Instagram</a>
                            <a href={storeData.socialMedia.telegram} className="text-blue-600">Telegram</a>
                            <a href={storeData.socialMedia.whatsapp} className="text-blue-600">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Shop Description and Card 3: Shop Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Card 2: Shop Description */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-bold">Shop Description</h3>
                    <p>{storeData.description}</p>
                </div>

                {/* Card 3: Shop Details */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-bold">Shop Details</h3>
                    <p>Shop ID: {storeData.shopID}</p>
                    <p>Business Type: {storeData.businessType}</p>
                    <p>Region: {storeData.region}</p>
                    <p>District: {storeData.district}</p>
                    <p>Postal: {storeData.postal}</p>
                    <p>Location: {storeData.location}</p>
                </div>
            </div>

            {/* Card 4: Shop Images */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold">Shop Images</h3>
                <div className="flex space-x-2">
                    {storeData.images.map((image, index) => (
                        <img key={index} src={image} alt={`Shop Image ${index + 1}`} className="w-32 h-32 object-cover rounded" /> // Increased image size
                    ))}
                </div>
            </div>

            {/* Card 5: Top 5 Bought Items and Card 6: Top 3 Customers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 5: Top 5 Bought Items */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-bold">Top 5 Bought Items</h3>
                    <ul className="list-disc pl-5">
                        {storeData.topItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Card 6: Top 3 Customers */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-bold">Top 3 Customers</h3>
                    <ul className="list-disc pl-5">
                        {storeData.topCustomers.map((customer, index) => (
                            <li key={index}>{customer}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Store;