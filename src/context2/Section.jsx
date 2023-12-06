import { LevelProvider } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    <div className="section">
      <LevelProvider level={level || 1}>
        {children}
      </LevelProvider>
    </div>
  );
}
