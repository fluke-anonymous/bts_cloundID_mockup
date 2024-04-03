import React, { useState } from 'react';

interface Tab {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tab: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-primary dark:border-primary dark:text-gray-400">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`bg-primary border-t-2 border-primary rounded-t-lg px-4 py-2 border-x-2 ${tab.id === activeTab
                            ? ' text-white '
                            : ' border-opacity-20 bg-opacity-10 text-gray-dark '
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="mt-4">{tabs.find(tab => tab.id === activeTab)?.content}</div>
        </div>
    );
};

export default Tab;
