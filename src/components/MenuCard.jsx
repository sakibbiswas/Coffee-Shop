import React from 'react';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';

export default function MenuCard({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const isFav = favorites.includes(item.id);

  return (
    <div className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 rounded-2xl hover:shadow-xl hover:-translate-y-2">

      {/* Image with overlay */}
      <div className="relative w-full h-52">
        <img
          src={item.img}
          alt={item.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 h-36">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {item.category}
          </p>
        </div>

        {/* Price & Favorite */}
        <div className="flex items-center justify-between mt-3">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {item.price}
          </div>
          <button
            onClick={() => dispatch(toggleFavorite(item.id))}
            aria-label="toggle favorite"
            className={`p-2 rounded-full transition-colors duration-300 ${
              isFav ? 'bg-rose-100 dark:bg-rose-900/50' : 'bg-gray-100 dark:bg-gray-800'
            } hover:bg-rose-200 dark:hover:bg-rose-800/60`}
          >
            <Heart className={`w-5 h-5 ${isFav ? 'text-rose-600' : 'text-gray-400 dark:text-gray-300'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
