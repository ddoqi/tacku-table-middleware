import { cls } from "@/util";
import TopButton from "../button/TopButton";

const ChangeSortedBtn = ({
    text,
    currentItems,
    dataResults,
    isBest,
    activeBestBtn,
    inactiveBestBtn,
    filteredFood,
    filteredTime,
}: any) => {
    // dataResults = 검색결과
    // totalItems = 전체레시피(6개씩)
    // currentItems = 전체레시피(총)

    const filteredFoodAndTime =
        (!dataResults?.length ? currentItems?.length : dataResults?.length) &&
        filteredFood?.length &&
        filteredTime?.length;
    const filteredOnlyFood =
        (!dataResults?.length ? currentItems?.length : dataResults?.length) &&
        filteredFood?.length;
    const filteredOnlyTime =
        (!dataResults?.length ? currentItems?.length : dataResults?.length) &&
        filteredTime?.length;

    return (
        <div className="w-4/5 flex justify-end items-center mb-[20px]">
            <TopButton />
            <p
                className={cls(
                    "text-mono100 mr-[330px]",
                    dataResults?.length ? "" : "hidden"
                )}
            >
                총&nbsp;
                <span className="text-red100">
                    {dataResults
                        ? filteredFoodAndTime
                            ? dataResults.filter(
                                  (item: any) =>
                                      filteredFood.includes(
                                          item.foodCategory
                                      ) ||
                                      filteredTime.includes(item.cookingTime)
                              ).length
                            : filteredOnlyFood
                            ? dataResults.filter((item: any) =>
                                  filteredFood.includes(item.foodCategory)
                              ).length
                            : filteredOnlyTime
                            ? dataResults.filter((item: any) =>
                                  filteredTime.includes(item.cookingTime)
                              ).length
                            : dataResults.length
                        : null}
                </span>
                건의 레시피가 준비되어 있습니다.
            </p>
            <p
                className={cls(
                    "text-mono100 mr-[330px]",
                    dataResults?.length ? "hidden" : ""
                )}
            >
                <span className="text-red100">
                    {text ? `${text}의 결과` : null}
                </span>
                <span className="text-red100">
                    {currentItems?.length
                        ? filteredFoodAndTime
                            ? currentItems.filter(
                                  (item: any) =>
                                      filteredFood.includes(
                                          item.foodCategory
                                      ) ||
                                      filteredTime.includes(item.cookingTime)
                              ).length
                            : filteredOnlyFood
                            ? currentItems.filter((item: any) =>
                                  filteredFood.includes(item.foodCategory)
                              ).length
                            : filteredOnlyTime
                            ? currentItems.filter((item: any) =>
                                  filteredTime.includes(item.cookingTime)
                              ).length
                            : currentItems.length
                        : 0}
                </span>
                건의 레시피가 준비되어 있습니다.
            </p>
            <ul className="flex justify-end">
                <li
                    className={cls(
                        "sorted-btn",
                        isBest === "viewCount"
                            ? "bg-brand100 text-white"
                            : "text-mono80"
                    )}
                    onClick={activeBestBtn}
                >
                    인기순
                </li>
                <li
                    className={cls(
                        "sorted-btn",
                        isBest === "createdAt"
                            ? "bg-brand100 text-white"
                            : "text-mono80"
                    )}
                    onClick={inactiveBestBtn}
                >
                    최신순
                </li>
            </ul>
        </div>
    );
};

export default ChangeSortedBtn;
