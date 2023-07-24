import linked from "../../assets/Linkedinimg.jpg";
import insta from "../../assets/Instagramimg.jpg";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center rounded-2xl border-8 border-green-900 bg-slate-300 py-4 drop-shadow-md">
        <a href="https://www.linkedin.com/in/joshua-norris-080b4729/">
          <img className="h-12 w-24 object-scale-down" src={linked} alt="" />
        </a>
        <a href="https://www.instagram.com/put14in/">
          <img className="h-12 w-24 object-scale-down" src={insta} alt="" />
        </a>
      </footer>
    </>
  );
}
