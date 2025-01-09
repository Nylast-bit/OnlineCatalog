import React, { useState, useRef, useEffect } from "react";

type TabState = {
  currentTab: number;
  noTabs: number;
};

export default function TabsLgPill({
  firstComponent: FirstComponent,
  secondComponent: SecondComponent,
  tabLabels,
}: {
  firstComponent: React.ElementType;
  secondComponent: React.ElementType;
  tabLabels: [string, string];
}): JSX.Element {
  const [tabSelected, setTabSelected] = useState<TabState>({
    currentTab: 1,
    noTabs: 2,
  });

  const wrapperRef = useRef<HTMLUListElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "ArrowRight") {
      setTabSelected((prev) => ({
        ...prev,
        currentTab: prev.currentTab < prev.noTabs ? prev.currentTab + 1 : 1,
      }));
    } else if (e.key === "ArrowLeft") {
      setTabSelected((prev) => ({
        ...prev,
        currentTab: prev.currentTab > 1 ? prev.currentTab - 1 : prev.noTabs,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul className="flex items-center gap-2" role="tablist" ref={wrapperRef}>
        {tabLabels.map((label, index) => {
          const tab = index + 1;
          return (
            <li key={tab} role="presentation">
              <button
                className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                  tabSelected.currentTab === tab
                    ? "bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300"
                    : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-emerald-300"
                }`}
                id={`tab-label-${tab}`}
                role="tab"
                aria-setsize={tabLabels.length}
                aria-posinset={tab}
                tabIndex={tabSelected.currentTab === tab ? 0 : -1}
                aria-controls={`tab-panel-${tab}`}
                aria-selected={tabSelected.currentTab === tab}
                onClick={() =>
                  setTabSelected((prev) => ({ ...prev, currentTab: tab }))
                }
              >
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <div
          className={`px-6 py-4 ${
            tabSelected.currentTab === 1 ? "" : "hidden"
          }`}
          id="tab-panel-1"
          aria-hidden={tabSelected.currentTab !== 1}
          role="tabpanel"
          aria-labelledby="tab-label-1"
          tabIndex={-1}
        >
          <FirstComponent />
        </div>
        <div
          className={`px-6 py-4 ${
            tabSelected.currentTab === 2 ? "" : "hidden"
          }`}
          id="tab-panel-2"
          aria-hidden={tabSelected.currentTab !== 2}
          role="tabpanel"
          aria-labelledby="tab-label-2"
          tabIndex={-1}
        >
          <SecondComponent />
        </div>
      </div>
    </section>
  );
}
