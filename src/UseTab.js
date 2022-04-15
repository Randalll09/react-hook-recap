import { useState } from 'react';

const content = [
  {
    tab: 'Section1',
    context: 'This is Section1',
  },
  {
    tab: 'Section2',
    context: 'This is Section2',
  },
  {
    tab: 'Section3',
    context: 'This is Section3',
  },
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentTab: allTabs[currentIndex],
    changeTab: setCurrentIndex,
  };
};

const UseTab = () => {
  const { currentTab, changeTab } = useTab(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeTab(index)} key={section.tab}>
          {section.tab}
        </button>
      ))}
      {currentTab.context}
    </div>
  );
};

export default UseTab;
