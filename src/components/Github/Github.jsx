import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f4f7f6] px-6 py-14">
      <section className="w-full max-w-md rounded-2xl border border-[#406861]/15 bg-white p-8 text-center shadow-lg sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#356a26]">
          GitHub profile
        </p>
        <img
          src={data.avatar_url}
          alt={`${data.login}'s profile`}
          className="mx-auto mt-6 size-28 rounded-full border-4 border-[#406861]/20 object-cover shadow-md"
        />
        <h1 className="mt-5 text-2xl font-bold text-[#24433e]">{data.login}</h1>
        <div className="">
            {data.bio}
        </div>
        <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[#406861]/10 px-4 py-2 text-lg text-[#24433e]">
          <span className="font-semibold">{data.followers}</span>
          <span className="text-slate-600">followers</span>
        </div>
        <button className="flex gap-3 items-center justify-center w-fit mx-auto mt-2.5 cursor-pointer font-bold bg-[#406861]/10 p-2 rounded-full">
            <svg data-component="Octicon" aria-hidden="true" focusable="false" class="octicon octicon-mark-github" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" display="inline-block" overflow="visible" style={{"vertical-align":"text-bottom"}}><path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"></path></svg>
            Github
        </button>
      </section>
    </main>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/harsh-upla");
  return response.json();
};
