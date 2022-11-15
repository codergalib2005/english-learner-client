import Link from "next/link";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

interface userNumber {
  otpNumber: string | "";
}

const OTP: React.FC = () => {
  const [value, setValue] = useState<userNumber>({ otpNumber: "" });
  console.log(value)
  return (
    <div className="container">
      <div className="shape"></div>
      <div className="login_form">
        <div className="form-info">
          <h5>Welcome Back !</h5>
          <p>Sign in to continue to Velzon.</p>
        </div>
        <div className="form">
          <label className="form-label">Enter verification code</label>
          <div className="user_form">
            <OtpInput
              value={value.otpNumber}
              onChange={(e: string) => setValue({ otpNumber: e })}
              numInputs={5}
            />
          </div>
          <Link href="/"><button className="form_btn">Confarm</button></Link>
        </div>
      </div>
    </div>
  );
};
export default OTP