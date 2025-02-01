import { data } from "../data";
import { useEffect, useState } from "react";

function CategoriesSlide() {
  const [categories, setCategories] = useState<
    { id: number; name: string; icon: string }[]
  >([]);
  const [startIndex, setStartIndex] = useState(0); // To track the starting index of visible categories

  const visibleCategories = categories.slice(startIndex, startIndex + 6); // Get the 6 visible categories

  const handleNext = () => {
    if (startIndex + 6 < categories.length) {
      setStartIndex(startIndex + 6);
    }
  };

  const handlePrev = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  };

  useEffect(() => {
    setCategories(data.categories); // Assuming data.categories holds the list of categories
  }, []);

  return (
    <div className="px-20">
      <div className="relative">
        <div className="grid grid-cols-6 gap-4">
          {visibleCategories.map((cat) => (
            <div className="p-2 shadow flex justify-center items-center" key={cat.id}>
              <h2 className="font-semibold">{cat.name}</h2>
              {cat.icon}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 6 >= categories.length}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default CategoriesSlide;
