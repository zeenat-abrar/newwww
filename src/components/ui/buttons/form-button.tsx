"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

interface FormPrimaryButtonProps {
  text: string;
  paddingClassName?: string;
  arrowClassName?: string;
  loading?: boolean;
}

const FormPrimaryButton = ({ text, paddingClassName, arrowClassName, loading }: FormPrimaryButtonProps) => {
  const iconColor = loading ? "text-gray-400" : "text-white";
  return (
    <button
      disabled={loading}
      className={cn(
        "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] group relative flex items-center overflow-hidden rounded-md bg-ivviolet-600 hover:bg-ivviolet-800 border border-ivviolet-600 hover:border-ivviolet-800 px-20 py-3 text-sm font-medium text-white uppercase",
        paddingClassName,
        loading ? "bg-gray-300 hover:bg-gray-300 shadow-none hover:shadow-none border-gray-300 hover:border-gray-300" : ""
      )}
    >
      {loading ? (
        <div role="status" className="mr-3 mt-[-3px]">
          <svg
            aria-hidden="true"
            className="inline size-4 text-gray-50 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}
      <span className="absolute left-0 top-1/2 block h-0 w-full bg-ivindigo-200"></span>
      {loading ? (
        <></>
      ) : (
        <span
          className={cn(
            "ease absolute right-0 hidden md:flex size-10 translate-x-full items-center justify-start duration-500 group-hover:-translate-x-32",
            arrowClassName
          )}
        >
          <FontAwesomeIcon icon={faAngleRight} className={cn("ml-1 text-white text-sm", iconColor)} />
        </span>
      )}
      <span className={cn("relative duration-700 md:group-hover:-translate-x-3 text-center", loading ? "group-hover:-translate-x-0" : "")}>{text}</span>
    </button>
  );
};

export default FormPrimaryButton;
