export default function Footer({ viewCount }) {
  return (
    <div className="w-full fixed bottom-0 bg-sky-700 p-4">
      <p className="text-center text-2xl font-sans text-slate-100">
        {`This page was visited
        ${viewCount ? viewCount : " ..."} times!`}
      </p>
    </div>
  );
}
