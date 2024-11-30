import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";


function Contributions() {
  return (
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Am I Consistent?" />

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username="zeusnotfound04"
          blockSize={14}
        />
      </div>
    </div>
  );
};

export default Contributions;