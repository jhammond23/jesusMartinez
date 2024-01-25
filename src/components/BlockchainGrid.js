import React from 'react';
import './BlockchainGrid.css'; // You'll create this CSS file for the grid animations

const BlockchainGrid = () => {
  return (
    <svg className="blockchain-grid" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Create a pattern of small circles (nodes) */}
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 * col + 10}
            cy={20 * row + 10}
            r={2}
            className={`node node-${row}-${col}`}
          />
        ))
      )}
      {/* Lines connecting the nodes could be added here */}
      {/* ... */}
    </svg>
  );
};

export default BlockchainGrid;
