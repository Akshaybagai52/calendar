import { FeedBackProps } from "@/types/types";
import { FeedbackData, FeedbackDataMessage } from "@/data/feedbackFormData";
import { useForm, FieldError } from "react-hook-form";
import { SubmitButton } from "../buttons/buttons";

import { useEffect, useRef, useState } from "react";
import { CorssSvg } from "../corssSvg/corsSvg";
import "./feedbackForm.css";
import { FeedbackSaveApi, getApiWithId } from "@/utils/api";
import { Loader } from "../loader/loader";
import { Ratings } from "../ratings/stars";

export const FeedbackForm = ({ setShowfeedbackform }: any) => {
  const [uniqueUser, setUniqueUser] = useState<any>();
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [showRatingBox, setShowRatingBox] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setError,
    watch,
  } = useForm();

  useEffect(() => {
    let user_email = localStorage.getItem("email");
    const getData = async () => {
      let userData: any = await getApiWithId(user_email);

      setUniqueUser(userData);
    };
    getData();
  }, []);

  const onSubmit = async (feeddata: any | string) => {
    if (!feeddata) {
      console.log("feedback not found");
    }
    let feedUserData = { ...feeddata, user_id: uniqueUser.id };
    let responseApi: any = await FeedbackSaveApi(feedUserData);

    reset();
    if (responseApi.status === 200) {
      setIsLoader(true);
   
      setShowRatingBox(true);
    } else {
      setIsLoader(false);
    }
  };

  const handleChange = async (name: any) => {
    // await validateAtLeastOneField(name);
  };

  const errorMessages: Record<string, string> = {
    user_name: "Please enter a valid name.",
    feedback: "please Enter Some message about feedback",
  };

  const validateAtLeastOneField = async (name: string) => {
    setError(name, {
      type: "manual",
      message: `${errorMessages[name]} `,
    });
  };

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!formRef.current?.contains(e.target as Node)) {
        setShowfeedbackform(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="fixed backdrop-brightness-[0.8] w-[100%] h-[100%] right-0 left-0 top-0 bottom-0 z-[9999999999]">
      
      <div className="absolute z-[9999999] right-0 left-0 top-[95px]   ">
        <div
          ref={formRef}
          className="contact-form feedback_main w-[300px] mx-auto border border-black p-2 overflow-hidden !bg-[#000]  rounded-[10px]"
        >
          {showRatingBox===false ?<form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div
              className="close_popup float-right  cursor-pointer"
              onClick={() => setShowfeedbackform(false)}
            >
              <CorssSvg />
            </div>
            <div className="border-b-[black] border-b border-solid pb-2 pt-[5px] rounded-[10px]  bg-[#d7f3d7]">
              <h3 className="text-center font-bold ">Your Feedback</h3>
            </div>
       

            {FeedbackData?.map((inputs: FeedBackProps | any, index: any) => {
              const inputError = errors[inputs.name] as FieldError | undefined;
              return (
                <div key={index} className="mt-3 form-group">
               
                    <>
                      <p className=" user_label !inline-block font-bold text-white ">
                        {inputs.label} -:
                      </p>
                      <input
                        type={inputs.type} placeholder={inputs.placeHolder}
                        className=" !inline-block w-[100%] border-[black] border border-solid rounded-[10px] p-2"
                        {...register(`${inputs.name}`, { required: true })}
                      />
                      <div className="h-6">
                        {errors[inputs.name] && (
                          <span className="text-[15px] text-red-600">
                            {inputError?.message || "fields required"}
                          </span>
                        )}
                      </div>
                    </>
                  
                </div>
              );
            })}
            {FeedbackDataMessage?.map((inputs: string | any, index: any) => {
              const inputError = errors[inputs.name] as any | undefined;
              return (
                <div key={index}>
                  <p className=" user_label !inline-block font-bold  !text-white">
                    {inputs.label} 
                  </p>
                  <textarea placeholder={inputs.placeHolder}
                    className="!inline-block w-[100%] border-[black] border border-solid rounded-[10px] p-2"
                    {...register(`${inputs.name}`, { required: true })}
                  />

                  {errors[inputs.name] && (
                    <span className="text-[15px] text-red-600">
                      {inputError?.message || "fields required"}
                    </span>
                  )}
                </div>
              );
            })}
            <div className="submitFeedback relative">
              <SubmitButton
                btnName={isLoader ? "feedback submitted" : "Submit Feedback"}
                pathName="feedback"
                onSubmit={handleSubmit(onSubmit)}
                OnClick={() => console.log("feedback")}
              />
              {/* <div className="loader_des absolute top-[10px] right-[29px] ">
                <Loader isLoader={isLoader} />
              </div> */}
            </div>
          </form>:<Ratings/>}
        </div>
      </div>
    </div>
  );
};
