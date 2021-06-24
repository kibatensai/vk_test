import React, { FC, memo, useState, KeyboardEvent } from "react";
import styling from "./Tabs.module.scss";


export const Tabs: FC<any> = memo(({ data }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>, i: number) => { if (e.key === 'Enter') setActiveTab(i) }

  return (
    <>
      <div className={styling.tabs_component_container}>
        {data[activeTab].component}
      </div>
      <div className={styling.tabs_items_block}>
        {data.map((val: any, i: any) => {
          return (
            <div tabIndex={0} className={`${styling.tabs_items_block__item} ${i === activeTab ? styling.tabs_items_block__item_active : ''}`} onClick={() => setActiveTab(i)} onKeyPress={(e) => keyPressHandler(e, i)} key={i}>
              {val.title}
            </div>
          );
        })}
      </div>
    </>
  );
});
