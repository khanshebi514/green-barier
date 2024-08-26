

export default function Loader() {
 

  return (
    <div className="w-full h-screen flex justify-center flex-col gap-10 items-center bg-white">
        <div className="w-[100px] h-[100px] bg-[#064BCA] animate-spin flex justify-center items-center">
          <div className="w-[50px] h-[50px] bg-white rounded-full animate-bounce flex justify-center items-center">
            <div className="w-[25px] h-[25px] bg-[#064BCA] animate-ping ">

            </div>
          </div>
        </div>
        <p className="text-[#064BCA] animate-pulse">Please Wait Until data is loaded ...!</p>
    </div>
  );
}