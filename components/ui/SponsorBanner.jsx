export default function SponsorBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white p-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500">Sponsored by</span>
              <img src="/sponsors/dasaudio.svg" alt="DAS Audio" className="h-8" />
            </div>
            <a href="https://dasaudio.com" target="_blank" className="rounded-xl bg-[#1F4FFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#173FCC] transition">
              Explore DAS Audio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
