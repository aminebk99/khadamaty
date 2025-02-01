import { data } from "../data";
import { useEffect, useState } from "react";

function CategoriesSlide() {
  const [categories, setCategories] = useState<
    { id: number; name: string; icon: string }[]
  >([]);

  useEffect(() => {
    setCategories(data.categories);
  }, []);
  return (
    <div className="px-20">
      <div className="grid grid-cols-6 gap-4 relative">
        {categories.map((cat) => (
          <div className="p-2 shadow flex justify-center items-centerc">
            <h2 className="font-semibold" key={cat.id}>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSlide;
