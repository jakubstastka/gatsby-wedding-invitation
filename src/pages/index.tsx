import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <title>Karolína & Jakub</title>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center sm:text-center sm:text-xl pt-5">
            <p>Budeme se brát!</p>
          </div>

          <div className="flex justify-center lg:text-9xl md:text-7xl sm:text-5xl font-bold pt-12 text-green-500">
            <Link to="/">
              Karolína
              <br /> & Jakub
            </Link>
          </div>
          <div className="flex justify-center lg:text-9xl md:text-7xl sm:text-5xl font-bold pt-12">
            <StaticImage
              alt="Karolína & Jakub"
              src="../images/karolina_jakub.jpg"
              width={500}
              height={375}
              quality={100}
            />
          </div>
          <div className="flex justify-center text-md font-bold pt-12">
            Více info již brzy
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
