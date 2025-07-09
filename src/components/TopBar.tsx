import BackButton from "./BackButton";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 flex items-center z-30 bg-transparent">
      <BackButton className="ml-4 mt-2" />
    </div>
  );
};

export default TopBar;
