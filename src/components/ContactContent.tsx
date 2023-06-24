import CustomButton from "./Button";
import Description from "./Description";
CustomButton;
import contact from "@assets/contact.svg";

const ContactContent: React.FC = () => {
  return (
    <div className="pb-6">
      <div className="font-poppins text-txt-secondary pb-6 mb-10">
        <div className="text-xl md:w-1/2 mb-6 md:text-xl xs:text-base">
          <Description>
            I am currently looking for an opportunity, so if you are looking for
            a frontend React developer, i would be really interested. So feel
            free to reach out to me via the button below
          </Description>
        </div>
        <div className="sm:justify-start xs:flex xs:justify-center">
          <CustomButton url="mailto:abdat.med.younes@gmail.com">
            Say hi!
          </CustomButton>
        </div>
      </div>
      <div className="flex md:justify-end xs:justify-center">
        <img className="lg:w-fit sm:w-80 xs:w-72" src={contact} alt="contact" />
      </div>
    </div>
  );
};

export default ContactContent;
