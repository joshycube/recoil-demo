import * as React from "react";

interface Props {
  dietType: string;
  count: number;
}

function SummaryItem({ dietType, count }: Props) {
  return count > 0 ? (
    <span data-test-id="dietary-summary">
      {count}x
      <span className="dietary" data-test-id="dietary-type">
        {dietType}
      </span>
    </span>
  ) : null;
}

export default SummaryItem;
