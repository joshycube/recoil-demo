import * as React from "react";

interface Props {
  dietType: string;
  count: number;
}

function SummaryItem({ dietType, count }: Props) {
  return count > 0 ? (
    <span>
      {count}x<span className="dietary">{dietType}</span>
    </span>
  ) : null;
}

export default SummaryItem;
