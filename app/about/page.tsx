import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-100 flex justify-center">
      <Card className="max-w-4xl w-full p-8 shadow-lg rounded-2xl bg-white">
        <CardContent>
          <h1 className="text-4xl font-bold text-center mb-6 text-green-700">About Us</h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">About Scrappie</h2>
            <p className="text-gray-600 italic">Transforming Waste into Value</p>
            <p className="text-gray-700 mt-2">
              Scrappie is an online platform that connects people who have scrap materials with buyers who can turn
              those materials into new products. We help reduce waste, conserve resources, and promote sustainability.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              We aim to make recycling profitable and easy, fostering a world where waste is seen as a valuable resource.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where all materials are reused or recycled, ensuring zero waste.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-medium text-green-600">Sustainability</h3>
                <p className="text-gray-700">Protecting the environment for future generations.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-green-600">Innovation</h3>
                <p className="text-gray-700">Continuously improving our platform for efficiency.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-green-600">Community</h3>
                <p className="text-gray-700">Working together for a sustainable future.</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">How We Work</h2>
            <p className="text-gray-700">
              Sellers list their scrap materials, and buyers search for what they need. Our competitive bidding system
              ensures sellers get the best price.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Scrappie?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Easy and convenient scrap recycling.</li>
              <li>Best prices for scrap materials.</li>
              <li>Commitment to sustainability.</li>
              <li>Experienced professionals to assist you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-700">Have questions? Feel free to reach out to us.</p>
            <p className="text-gray-700 mt-4">We appreciate your support in making Scrappie the best recycling platform.</p>
            <p className="text-gray-700 mt-4 font-semibold">Sincerely,</p>
            <p className="text-gray-700 font-semibold">The Scrappie Team</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
