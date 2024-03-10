import Image from "next/image";
import loadingSpinner from "../../public/spinner.svg";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      {/* <img className="h-52" src={loadingSpinner} alt="loading..." /> */}
      <Image
        className="h-52"
        width={52}
        height={52}
        src={loadingSpinner}
        alt="loading..."
      />
    </div>
  );
}
