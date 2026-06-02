import React from 'react';

const ReviewCard = ({ review }) => {
    return (
      <div>
        <div className="w-[420px] h-[170px] bg-white border rounded-2xl p-5 shadow-sm mx-3">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>

          <div className="flex gap-1 text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>

          <p className="text-sm text-gray-600 leading-relaxed">{review.review}</p>
        </div>
      </div>
    );
};

export default ReviewCard;