import React, { useState, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {React.isValidElement(child) && child.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;