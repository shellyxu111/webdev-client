"use client";

import "../lab2/tailwind/utilities.css";
import ClickEvent from "./ClickEvent";
import CounterBroken from "./CounterBroken";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayShelly = () => {
    alert("Shelly Xu")
  }
  const sampleFromParent = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions 
      message="Hello from Lab 4"
      theFunction={sayHello}
      myFunction={sayShelly}
      theOtherFunction={sampleFromParent}/>
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
    </div>
  );
}
