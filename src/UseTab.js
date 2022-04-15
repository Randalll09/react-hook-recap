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
  };
};

const UseTab = () => {
  const { currentTab } = useTab(0, content);
  return (
    <div>
      {content.map((section) => (
        <button key={section.tab}>{section.tab}</button>
      ))}
      {currentTab.context}
    </div>
  );
};

export default UseTab;
