export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <svg viewBox="0 0 24 24" className="h-24 w-24" aria-hidden="true">
                <circle cx="12" cy="12" r="2.05" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(120 12 12)"
                  />
                </g>
              </svg>
              <div className="mt-2 text-2xl font-semibold">React JS</div>
            </div>
          </div>
          <div className="min-w-0 p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion...
            </p>
          </div>
        </div>
      </div>

      <div
        id="wd-ai-responsive"
        className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50"
      >
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-2xl font-semibold">React JS</div>
            </div>
          </div>
          <div className="min-w-0 p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion...
            </p>
          </div>
        </div>
      </div>

      <div
        id="wd-your-design"
        className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      >
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/shibainu.jpg"
              alt="Shiba Inu"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-pink-300">
              <svg
                viewBox="0 0 100 100"
                className="h-24 w-24"
                role="img"
                aria-label="Shiba Inu"
              >
                <path
                  d="M20 42 Q12 12 20 10 Q30 12 38 25
       Q50 20 62 25 Q70 12 80 10 Q88 12 80 42
       Q90 60 85 74 Q75 92 50 92
       Q25 92 15 74 Q10 60 20 42 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                <path
                  d="M22 20 L32 29 L23 35 Z
       M78 20 L68 29 L77 35 Z"
                  fill="currentColor"
                />

                <path
                  d="M29 48 L37 51 M63 51 L71 48"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M16 65 Q28 60 37 71
       Q50 48 63 71 Q72 60 84 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M44 65 Q50 62 56 65 Q56 72 50 74 Q44 72 44 65"
                  fill="currentColor"
                />

                <path
                  d="M50 74 V79 M40 78 Q45 84 50 79 Q55 84 60 78"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mt-2 text-2xl font-semibold">Shiba Inu</div>
            </div>
          </div>
          <div className="min-w-0 p-8 md:p-11">
            <div className="text-sm font-semibold tracking-wide text-pink-300 uppercase">
              Shiba Inu
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              9 Coat Colors and Types
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the types and colors of Shiba Inu...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
