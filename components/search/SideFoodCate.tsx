const categoryFoodList = [
    { name: "밥&도시락&면" },
    { name: "국&탕&찌개" },
    { name: "구이&볶음&찜" },
    { name: "튀김류" },
    { name: "베이커리&디저트" },
    { name: "음료&주류" },
    { name: "식단&건강관리" },
];

const SideFoodCate = ({ onCheckedFood, filteredFood }: any) => {
    return (
        <div className="flex flex-col">
            <h4 className="mb-3 text-sm text-mono80">음식 종류</h4>
            <div className="flex flex-col justify-center gap-y-3 ml-5">
                {categoryFoodList.map((item) => {
                    return (
                        <div key={item.name}>
                            <input
                                type="checkbox"
                                id={item.name}
                                onChange={(e) => {
                                    onCheckedFood(
                                        e.target.checked,
                                        e.target.id
                                    );
                                }}
                                checked={
                                    filteredFood.includes(item.name)
                                        ? true
                                        : false
                                }
                            />
                            <label htmlFor={item.name} className="ml-2">
                                {item.name.toString().replaceAll("&", "/")}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideFoodCate;
