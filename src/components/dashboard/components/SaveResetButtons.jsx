import { useState } from "react";

export default function SaveResetButtons() {
  const [isSaved, setIsSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(true); // set to true for demo

  const handleSave = () => {
    console.log("✅ Settings saved");
    setIsSaved(true);
    setHasChanges(false);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleReset = () => {
    console.log("🔁 Reset to default");
    setHasChanges(true);
  };

  return (
    <div className="w-full mt-6 border rounded-2xl p-4 shadow-md">
      <div className="flex justify-end gap-4">
        {/* 🔁 Reset Button */}
        <button
          onClick={handleReset}
          className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100 transition text-gray-700"
        >
          <i className="fa fa-undo" aria-hidden="true"></i>
          Reset to Default
        </button>

        {/* 💾 Save Button */}
        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-white transition 
            ${hasChanges ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
        >
          <i className="fa fa-save" aria-hidden="true"></i>
          {isSaved ? "Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
