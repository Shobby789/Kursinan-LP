import React from "react";
import { styles } from "../../styles/styles";
import { HiMiniCheckBadge } from "react-icons/hi2";

const WhyChooseOuProduct = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.bgBody} py-6 lg:py-20`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-5xl lg:text-8xl font-semibold flex items-center justify-start">
            Why <br /> should <br /> choose <br /> our <br />
            product?
          </h1>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-center lg:px-6">
          <div className="border-b w-full flex items-center gap-4 pb-8">
            <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center p-1">
              <HiMiniCheckBadge className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1 lg:pr-2">
              <h1 className="text-2xl font-semibold">
                Quality is unquestionable
              </h1>
              <p className="font-medium text-sm text-gray-500">
                We always prioritize customer satisfaction over everything.
              </p>
            </div>
          </div>
          <div className="border-b w-full flex items-center gap-4 py-8">
            <div className="w-[72px] h-16 border border-black rounded-full flex items-center justify-center p-1">
              <HiMiniCheckBadge className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1 lg:pr-2">
              <h1 className="text-2xl font-semibold">International standard</h1>
              <p className="font-medium text-sm text-gray-500">
                We already have international standards, and we import abroad.
              </p>
            </div>
          </div>
          <div className="border-b w-full flex items-center gap-4 py-8">
            <div className="w-[72px] h-16 border border-black rounded-full flex items-center justify-center p-1">
              <HiMiniCheckBadge className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1 lg:pr-2">
              <h1 className="text-2xl font-semibold">Long warranty</h1>
              <p className="font-medium text-sm text-gray-500">
                All the products we provide have a long warranty of up to 2 - 3
                years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOuProduct;
