import React from 'react';

export default function Loading() {
  return (
    <div className="body text-center my-3">
      <div className="fa-3x my-3">
        <i className="fas fa-spinner fa-pulse" />
      </div>
      <h4>Loading...</h4>
    </div>
  );
}