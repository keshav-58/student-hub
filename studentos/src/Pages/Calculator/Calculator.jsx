import { useState } from "react";
import { Header } from "../../Components/Header.jsx";
import { Container } from "../../Components/Container.jsx";
import { Input } from "./Input.jsx";
import { Buttons } from "./Buttons.jsx";

export function Calculator() {
  const heading = "CALCULATOR";
  const extraInfo = "Do Your Calculations 🧮";
  const [answer, setAnswer] = useState("");
  const buttonValues = [
    "C",
    "⌫",
    ".",
    "+",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "/",
    "0",
    "=",
  ];

  return (
    <Container>
      <Header heading={heading} extraInfo={extraInfo} />
      <div className="flex items-center justify-center  flex-col gap-4 mt-8">
        <div className="bg-slate-800 rounded-3xl shadow-2xl p-4 md:p-6 w-full max-w-[360px] sm:max-w-[430px]">
          <Input answer={answer} />
          <Buttons
            buttonValues={buttonValues}
            answer={answer}
            setAnswer={setAnswer}
          />
        </div>
      </div>
    </Container>
  );
}
