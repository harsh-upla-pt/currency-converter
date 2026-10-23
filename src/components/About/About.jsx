
function About() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f4f7f6] px-6 py-14">
      <section className="w-full max-w-3xl rounded-2xl border border-[#406861]/15 bg-white p-8 shadow-lg sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#356a26]">
          About this project
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#24433e] sm:text-4xl">
          Currency Exchange
        </h1>
        <p className="mt-5 leading-7 text-slate-600">
          Currency Exchange is a simple tool for checking currency conversions.
          Choose the currencies you want, enter an amount, and get the converted
          value in just a moment.
        </p>
        <p className="mt-4 leading-7 text-slate-600">
          This project was created by <span className="font-semibold text-[#356a26]">Harsh Upla</span> to
          make everyday currency conversion quick and easy.
        </p>
      </section>
    </main>
  );
}

export default About;