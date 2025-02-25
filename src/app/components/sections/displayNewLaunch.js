// import React, { useState, useEffect } from 'react';

// const DisplayNewLaunch=()=>{
//     const [properties, setProperties] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       // Fetch data from the API
//       fetch('https://propleader.wpenginepowered.com/wp-json/wp/v2/property')
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setProperties(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setError(error.message);
//           setLoading(false);
//         });
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
//     return (
//         <div className="App">
//           <h1>Properties</h1>
//           <div className="property-list">
//             {properties.map((property) => (
//               <div key={property.id} className="property-item">
//                 <h2>{property.title.rendered}</h2>
//                 <p><strong>ID:</strong> {property.id}</p>
//                 <p><strong>Status:</strong> {property.status}</p>
//                 <p><strong>Type:</strong> {property.type}</p>
//                 <p><strong>Date:</strong> {property.date}</p>
//                 <p><strong>Link:</strong> <a href={property.link} target="_blank" rel="noopener noreferrer">{property.link}</a></p>
//                 <div dangerouslySetInnerHTML={{ __html: property.content.rendered }} />
//                 <hr />
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }

// export default DisplayNewLaunch
import React, { useEffect, useState } from 'react';

const CondosList = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        // Fetch all pages
        const response = await fetch(
          'https://sg.propertypursuit.co/wp-json/wp/v2/pages?per_page=100'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Filter pages by template
        const filteredPages = data.filter(
          (page) => page.template === 'templates-property/prop.php'
        );

        setPages(filteredPages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="condos-list">
      <h1>Condos</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <a href={page.link} target="_blank" rel="noopener noreferrer">
              {page.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CondosList;