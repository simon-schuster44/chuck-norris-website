export default function Footer({ viewCount }) {
  return (
    <div className="w-full fixed bottom-0 bg-gray-200 p-4">
      <p className="text-center font-bold text-2xl font-sans text-gray-800">
        {`This page was visited
        ${viewCount ? viewCount : " ..."} times!`}
      </p>
    </div>
  );
}
