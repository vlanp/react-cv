import { useState } from "react";
import "./item-selector-panels.css";
import { FaSquareCaretDown } from "react-icons/fa6";
import { FaSquareCaretUp } from "react-icons/fa6";
import CategoryItemSelectorGroup from "./item-selector-panel/category-item-selector-group";
import type { ICategoryItemPanel, IPanels } from "../types/IPanels";

const ItemSelectorPanels = ({
  categoryItemPanel,
}: {
  categoryItemPanel: ICategoryItemPanel;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [panel, setPanel] = useState<IPanels["panelTitle"]>(
    categoryItemPanel.panelTitle,
  );

  const handleClick = () => {
    setShow((pv) => !pv);
  };

  return (
    <>
      <div className={"item-selector-panel" + (show ? "" : " hide")}>
        <select
          className="item-selector-panel-title"
          name="panels"
          id="panel-select"
          value={panel}
          onChange={(e) => setPanel(e.target.value)}
        >
          <option value={categoryItemPanel.panelTitle}>
            {categoryItemPanel.panelTitle}
          </option>
        </select>
        <div className="item-selector-groups">
          {panel === categoryItemPanel.panelTitle &&
            categoryItemPanel.categoryItemGroups.map((categoryItemGroup) => (
              <CategoryItemSelectorGroup
                key={categoryItemGroup.categoryKey}
                categoryItemGroup={categoryItemGroup}
              />
            ))}
        </div>
      </div>
      <p
        className="item-selector small-size-text normal-color-text text-with-icon hover"
        onClick={handleClick}
      >
        {show ? (
          <FaSquareCaretDown className="large-icon" />
        ) : (
          <FaSquareCaretUp className="large-icon" />
        )}
      </p>
    </>
  );
};

export default ItemSelectorPanels;
