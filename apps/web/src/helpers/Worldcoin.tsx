import React, { useEffect } from "react";
import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";

const Worldcoin = () => {
  const WorldIDWidget = dynamic<WidgetProps>(
    () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
    { ssr: false }
  );

  return (
    <div>
      <WorldIDWidget
        // eslint-disable-next-line turbo/no-undeclared-env-vars
        actionId={process.env.NEXT_PUBLIC_ACTION_ID as string} // obtain this from developer.worldcoin.org
        signal="my_signal"
        enableTelemetry
        onSuccess={(verificationResponse) => console.log(verificationResponse)}
        onError={(error) => console.error(error)}
        debug={true} // to aid with debugging, remove in production
      />
    </div>
  );
};

export default Worldcoin;
