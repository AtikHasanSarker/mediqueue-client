import React from 'react';

const GlobalTutorLocation = () => {
    const globalTutors = [
      {
        country: "Italy",
        mentors: "150+ Mentors",
        image:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=500",
      },
      {
        country: "France",
        mentors: "80+ Mentors",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500",
      },
      {
        country: "Germany",
        mentors: "110+ Mentors",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500",
      },
      {
        country: "Netherlands",
        mentors: "40+ Mentors",
        image:
          "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=500",
      },
    ];
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold ">
              Our Global Tutor
            </h2>
            <h2 className="text-4xl font-bold">Network</h2>
          </div>

          {/* Countries */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {globalTutors.map((item) => (
              <div
                key={item.country}
                className="relative overflow-hidden rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.country}
                  className="h-80 w-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white m-2 rounded-md py-3 text-center shadow">
                  <h3 className="font-semibold text-gray-800">
                    {item.country}
                  </h3>
                  <p className="text-xs text-gray-500">{item.mentors}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mentor Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Become a Mentor */}
            <div className="bg-lime-50 border rounded-xl p-6 hover:bg-lime-100 transition duration-300">
              <h3 className="text-2xl font-bold text-center text-emerald-600 mb-2">
                Become a Learner
              </h3>

              <p className="text-center text-gray-600 text-sm mb-6">
                Become a Learner to gain expert guidance, build real-world
                skills.
              </p>

              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800"
                alt="Mentor"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>

            {/* Become a Mentor 2 */}
            <div className="bg-lime-50 border rounded-xl p-6 hover:bg-lime-100 transition duration-300">
              <h3 className="text-2xl font-bold text-center text-emerald-600 mb-2">
                Become a Tutor
              </h3>

              <p className="text-center text-gray-600 text-sm mb-6">
                Share your expertise, guide aspiring professionals, and create
                impact.
              </p>

              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800"
                alt="Mentor"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default GlobalTutorLocation;