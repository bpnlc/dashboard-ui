import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return <div className="p-4 flex flex-col gap-4 xl:flex-row">
    {/* left  */}
    <div className="w-full xl:w-[2/3]">
      <div className="bg-white h-full rounded-md">
        <h1 className="text-xl font-semibold">Schedule (4A)</h1>
        <BigCalendar />
      </div>
    </div>

    {/* right  */}
    <div className="w-full xl:w-[1/3] flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
  </div>;
};

export default StudentPage;