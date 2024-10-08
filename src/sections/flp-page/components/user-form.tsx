export default function UserForm({ handleFormSubmit }) {
  return (
    <div className="mx-auto rounded-lg bg-gray-900 p-5">
      <form
        action={handleFormSubmit}
        // method="POST"
        autoComplete="off"
        className="contact-form"
      >
        <div className="title-100 mb-7 block text-center !text-1 ">
          1 on 1 Consultation with Ronald
        </div>

        <input
          type="text"
          name="firstName"
          aria-required="true"
          required
          id="firstName"
          placeholder="First Name"
          aria-label="First Name"
          title="Please input your first name"
          className="title-200  mb-3 w-full rounded-secondary-mobile border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:pl-6 max-sm:!text-base xl:py-6"
        />
        <input
          type="email"
          name="email"
          aria-required="true"
          required
          id="email"
          placeholder="Email Address"
          aria-label="Email Address"
          title="Please input your email address"
          className="title-200 rounded-secondary mb-3 w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
        />
        <textarea
          name="description"
          aria-required="true"
          required
          id="description"
          placeholder="Project Description"
          aria-label="Project description"
          title="Please input your project description"
          className="title-200 rounded-secondary mb-9 h-[174px] w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
        />
        <div className="relative">
          <button
            type="submit"
            id="sb-learn-more"
            aria-label="Learn more about our starter code small business web design"
            title="Learn more about our starter code small business web design"
            className="rounded-primary sb-buttton-gradient-border max-sm:rounded-primary max-sm:before:rounded-primary mb-9 flex h-[76px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35]"
          >
            <span className="base-100 !font-small sm:title-200 semibold !text-invert-1 transition-colors duration-500 max-sm:text-lg max-sm:!font-medium">
              Schedule A Free Consultation Now
            </span>
          </button>
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
