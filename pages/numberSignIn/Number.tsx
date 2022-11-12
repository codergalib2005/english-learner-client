import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

interface userNumber {
  number: string | undefined;
}

export default function Number() {
  const [value, setValue] = useState<userNumber>({ number: "" });
  console.log(value);
  return (
    <div className="container">
      <div className="login_form">
        <div className="form-info">
          <h5>Welcome Back !</h5>
          <p>Sign in to continue to Velzon.</p>
        </div>
        <div className="form">
          <div className="user_number">
            <label className="form-label">User Number</label>
            <PhoneInput
              className="form-input"
              international
              countryCallingCodeEditable={false}
              defaultCountry="BD"
              placeholder={"Enter phone number"}
              value={value.number}
              onChange={(e) => setValue({ number: e })}
            />
          </div>
          <Link href="/numberSignIn/OTP"><button className="form_btn">Verify</button></Link>
        </div>
      </div>
    </div>
  );
}
