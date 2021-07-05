import * as React from "react";
import { useRecoilValue } from "recoil";

import { sumSelector } from "../../selectors/SumSelector";
import { dietSelector } from "../../selectors/DietSelector";
import SummaryItem from "./SummaryItem";

function Summary() {
  const sumOfSelection = useRecoilValue(sumSelector);
  const dietSelection = useRecoilValue(dietSelector);

  return (
    <>
      <div className="col-6 menu-summary-left">
        {!!sumOfSelection && (
          <span data-test-id="cart-counter">{sumOfSelection}</span>
        )}
      </div>
      <div className="col-6 menu-summary-right">
        {Object.keys(dietSelection).map((item: string) => (
          <SummaryItem key={item} dietType={item} count={dietSelection[item]} />
        ))}
      </div>
    </>
  );
}

export default Summary;
