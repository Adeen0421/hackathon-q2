import Head from "next/head";
import "./module.css"
import Image from 'next/image'
export default function Home() {
  const features = [
    { title: "Free Delivery", description: "Fast and reliable delivery.", icon: "" },
    { title: "100% Cashback", description: "Guaranteed satisfaction.", icon: "" },
    { title: "Quality Products", description: "Only the best for our customers.", icon: "" },
    { title: "24/7 Support", description: "We're here to help anytime.", icon: "" },
  ];

  return (
    <>
      <Head>
        <title>E-commerce Single Page</title>
      </Head>
      <div className="container">
        {/* About Section */}
        <section className="section1" id="about">
     <div className="at9">
            <img src="about.png" className="aboutimg"></img>
            <Image
            className="aboutimg"
          height={"0"}
          src={"/about.png"}
          width={"0"}
          alt="sf"
            />
            </div>
        <div className="about3">  <h1 className="about3">About Our Business</h1> 
          <p>
            We are a leading e-commerce business dedicated to providing the best
            services and products to our customers. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <button>Contact Us</button></div>
        </section>

        {/* Features Section */}
        <section className="section" id="features">
          <h2>Our Features</h2>
          <div className="flex">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" id="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <img
              src="about.png"
              alt="Client"
              className="avatar"
            />
            <Image
            src={'about.png'}
            height={'0'}
            width={'0'}
            alt="af"

            />
            <h3>Selina Gomez</h3>
            <p>CEO - Tech Corp</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui
              ultrices quam vel id sollicitudin aliquet et ac."
            </p>
          </div>
        </section>
      </div>
</>
);
}