import { submitFLP } from '@/app/action';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      id="sb-learn-more"
      aria-label="Learn more about our starter code small business web design"
      title="Learn more about our starter code small business web design"
      className="rounded-primary sb-buttton-gradient-border mb-9 flex h-[56px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] disabled:grayscale"
      disabled={pending}
    >
      <span
        id="submitBtn"
        className="title-200 semibold !text-invert-1 transition-colors duration-500 max-sm:text-base max-sm:!font-medium"
      >
        {pending ? (
          <div className="flex items-center justify-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
            <p>Submitting...</p>
          </div>
        ) : (
          'Get A Free Strategy Session'
        )}
      </span>
    </button>
  );
}

function DisabledSubmitButton() {
  return (
    <button
      type="submit"
      id="sb-learn-more"
      aria-label="Learn more about our starter code small business web design"
      title="Learn more about our starter code small business web design"
      className="rounded-primary sb-buttton-gradient-border mb-9 flex h-[56px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] disabled:grayscale"
      disabled
    >
      <span
        id="submitBtn"
        className="title-200 semibold !text-invert-1 transition-colors duration-500 max-sm:text-base max-sm:!font-medium"
      >
        Submitted!
      </span>
    </button>
  );
}

export default function UserForm() {
  const formRef = useRef(null);
  const [state, formAction] = useFormState(submitFLP, null);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [submittedFormMessage, setSubmittedFormMessage] = useState<
    string | null
  >(null);

  let fullUrl;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fullUrl = window.location.href;
      const hiddenInput = formRef.current.querySelector(
        "input[name='fullUrl']",
      );

      if (hiddenInput) {
        hiddenInput.value = fullUrl;
      }
    }
  }, [state]);

  const router = useRouter();
  useEffect(() => {
    if (state) {
      setSubmittedFormMessage(state?.msg);

      if (state.success) {
        setBtnDisabled(true);
        setTimeout(() => {
          router.push('/small-business-thank-you-lpv1');
        }, 1000);
      }

      const clearMessageTimeout = setTimeout(() => {
        setSubmittedFormMessage(null);
      }, 2000);

      return () => {
        clearTimeout(clearMessageTimeout);
      };
    }
  }, [state]);

  return (
    <div className="section content-container h-fit w-[634px] max-lg:w-full">
      <form
        action={formAction}
        method="POST"
        autoComplete="off"
        className="contact-form"
        ref={formRef}
      >
        <div className="mb-9 flex flex-col gap-5">
          <h3 className="title-100 text-center">
            1 on 1 Consultation with Ronald
          </h3>

          <input type="hidden" name="fullUrl" value={fullUrl} />
          <input
            type="text"
            name="firstName"
            aria-required="true"
            required
            id="firstName"
            placeholder="First Name"
            aria-label="First Name"
            title="Please input your first name"
            className={clsx(
              ' title-200 rounded-primary w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:pl-6 max-sm:!text-base xl:py-6 ',
              { 'border-red-500': state?.field === 'name' },
            )}
          />
          {state?.field === 'name' ? (
            <p className="text-red-700 ">Name is required</p>
          ) : (
            ''
          )}
          <input
            type="text"
            name="email"
            aria-required="true"
            required
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
            title="Please input your Email Address"
            className={clsx(
              ' title-200  rounded-primary w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:pl-6 max-sm:!text-base xl:py-6 ',
              { 'border-red-500': state?.field === 'email' },
            )}
          />
          {state?.field === 'email' ? (
            <p className="text-red-700 ">Invalid email</p>
          ) : (
            ''
          )}
          <textarea
            name="description"
            aria-required="true"
            required
            id="description"
            placeholder="Project Description"
            aria-label="Project description"
            title="Please Tell Us About Your Project"
            className={clsx(
              ' title-200 rounded-primary h-[140px] w-full resize-none border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6 ',
              { 'border-red-500': state?.field === 'description' },
            )}
          />
          {state?.field === 'description' ? (
            <p className="text-red-700 ">Description is required</p>
          ) : (
            ''
          )}
        </div>
        <div className="max-sm:w-full">
          <div className="relative z-0">
            {btnDisabled ? <DisabledSubmitButton /> : <SubmitButton />}
          </div>
        </div>
        <span className="title-300 text-2">
          <li className="my-3 flex items-center">
            <span className="mr-2 text-primary-5">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>{' '}
            4 Hour Response Time
          </li>
          <li className="my-3 flex items-center">
            <span className=" mr-2 text-primary-5">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>{' '}
            100% Free - No Obligations
          </li>
        </span>
      </form>
    </div>
  );
}
