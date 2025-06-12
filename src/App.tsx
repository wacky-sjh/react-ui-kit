import { uiComponents } from "./data/ui-components";
import { getStoryUrl } from "./lib/utils";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">UI Kit Components</h1>
        <ul className="space-y-2">
          {uiComponents.map((comp) => {
            const url = getStoryUrl(comp.name, comp.storyPath, comp.storySuffix);
            return (
              <li key={comp.name}>
                {url ? (
                  <a
                    href={url}
                    className="text-blue-600 hover:underline text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {comp.name}
                  </a>
                ) : (
                  <span className="text-gray-400 text-lg">{comp.name} (No story)</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
