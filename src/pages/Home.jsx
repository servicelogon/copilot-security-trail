import { PassportStrip } from "../components/PassportStrip";
import { RoleChips } from "../components/RoleChips";
import { TrailMap } from "../components/TrailMap";

export function Home() {
  return (
    <>
      <div className="home-head">
        <div>
          <h1>Walk the Copilot Security Trail</h1>
          <p className="lede">
            Five stations on a park path — privacy and architecture, enterprise
            data protection, a governed data foundation, Copilot Studio
            controls, then Zero Trust and the agents checklist. Every card is
            paraphrased from Microsoft Learn pages fetched for this build.
            Microsoft Copilot is the current name for what was Microsoft 365
            Copilot.
          </p>
        </div>
        <RoleChips />
      </div>
      <TrailMap />
      <PassportStrip />
    </>
  );
}
