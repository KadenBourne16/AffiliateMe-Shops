import React, { useEffect } from 'react';

function SpecificationsCard(props) {
  const { specifications, onDelete } = props;
  useEffect(() => {
    console.log(props.specifications);
  },[]);
  
  return (
    <div>
      {specifications.map((spec, index) => (
        <div key={index} className="flex justify-between items-center p-2 border rounded mb-2">
          <span>{spec.label}</span>
          <span>{spec.property}</span>
          <i 
            className="fas fa-trash text-red-500 cursor-pointer" 
            onClick={() => onDelete(index)} // Call the delete function with the index
          >
            Delete
          </i>
        </div>
      ))}
    </div>
  );
}

export default SpecificationsCard;